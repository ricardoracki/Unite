import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "297245f0-c780-48f8-ac2b-dc80120dbe36",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Evento para quem e apaixonado por programação",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
