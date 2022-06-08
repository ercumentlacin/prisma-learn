import { Prisma, PrismaClient } from '@prisma/client';

import { prismaInstance } from '../utils/connectPrisma';

export class Services {
  public prismaInstance: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;

  constructor() {
    this.prismaInstance = prismaInstance;
  }
}
