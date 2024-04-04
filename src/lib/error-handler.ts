import { FastifyInstance } from "fastify";
import { BadRequest } from "../routes/_errors/bad-request";
type FastifyErrorHandler = FastifyInstance["errorHandler"];

export const errorHandler: FastifyErrorHandler = (error, req, reply) => {
  if (error instanceof BadRequest) {
    return reply.status(400).send({ message: error.message });
  }
  if (error)
    return reply.status(500).send({ message: "Internal server error" });
};
