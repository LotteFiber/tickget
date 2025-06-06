import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const date = new Date();
const formattedDate = `${String(date.getDate()).padStart(2, "0")}-${String(
  date.getMonth() + 1
).padStart(2, "0")}-${date.getFullYear()}`;

const tickets = [
  {
    title: "Ticket 1",
    content: "This is the first ticket from the database",
    status: "DONE" as const,
    deadline: formattedDate,
    bounty: 499,
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket from the database",
    status: "OPEN" as const,
    deadline: formattedDate,
    bounty: 399,
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket from the database",
    status: "IN_PROGRESS" as const,
    deadline: formattedDate,
    bounty: 599,
  },
];

const seed = async () => {
  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets,
  });
};

seed();
