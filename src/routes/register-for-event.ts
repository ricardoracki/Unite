import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { BadRequest } from "./_errors/bad-request";

export async function RegisterForEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/events/:eventId/attendees",
    {
      schema: {
        params: z.object({
          eventId: z.string().uuid(),
        }),
        body: z.object({
          name: z.string().min(4),
          email: z.string().email(),
        }),
        response: {
          201: z.object({
            attendeeId: z.number(),
          }),
        },
      },
    },
    async (req, reply) => {
      const { eventId } = req.params;
      const { email, name } = req.body;

      const [attendeeForEmail, event, amountOffAttendeesForEvent] =
        await Promise.all([
          prisma.attendee.findUnique({
            where: {
              eventId_email: {
                email,
                eventId,
              },
            },
          }),
          prisma.event.findUnique({
            where: {
              id: eventId,
            },
          }),

          prisma.attendee.count({
            where: {
              eventId,
            },
          }),
        ]);

      if (attendeeForEmail !== null)
        throw new BadRequest("This e-mail already registered for this event.");

      if (
        event?.maximumAttendees &&
        amountOffAttendeesForEvent >= event?.maximumAttendees
      )
        throw new BadRequest(
          "The macimum number of attendees for this event has been reached."
        );

      const attendee = await prisma.attendee.create({
        data: {
          email,
          name,
          eventId,
        },
      });

      return reply.status(201).send({ attendeeId: attendee.id });
    }
  );
}
