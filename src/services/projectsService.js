import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getProjects = async () => {
  const projects = await prisma.projects.findMany({
    orderBy: { order: "asc"}
  });
  return projects;
};

export default {
  getProjects,
}