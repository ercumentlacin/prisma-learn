import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Connect the client
  await prisma.$connect();

  await prisma.profile.create({
    data: {
      name: 'John Doe',
    },
  });

  const allProfiles = await prisma.profile.findMany();
  console.log('allProfiles :>> ', allProfiles);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
