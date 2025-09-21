import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createContact = async (body) => {
  const contact = await prisma.contact.create({
    data: {
      name: body.name,
      email: body.email,
      message: body.message,
    },
  });
  return contact;
};

export default {
  createContact,
}