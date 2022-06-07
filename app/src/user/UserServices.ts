import { User } from '@prisma/client';

import { BadRequest } from '../error';
import { prismaInstance } from '../utils/connectPrisma';

export class UserServices {
  public getAllUsers = async () => {
    const users = await prismaInstance.user.findMany();
    return users;
  };

  public createUser = async (userData: User) => {
    const userExists = await this.getOneUser(userData.email);

    if (userExists) {
      throw new BadRequest('User already exists');
    }

    const user = await prismaInstance.user.create({ data: userData });
    return user;
  };

  public getOneUser = async (email: string) => {
    const user = await prismaInstance.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  };
}
