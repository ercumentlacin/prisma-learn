import { PrismaClient } from '@prisma/client';

export const prismaInstance = new PrismaClient();

export async function connectPrisma() {
  try {
    await prismaInstance.$connect();
  } catch (error) {
    throw error;
  }
}
