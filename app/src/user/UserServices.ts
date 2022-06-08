import { User } from '@prisma/client';

import { BadRequest } from '../error';
import { getHashedPassword, generateAccessToken } from '../utils';
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

    const hashedPassword = getHashedPassword(userData.password);

    const user = await prismaInstance.user.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
    });
    return user;
  };

  public getOneUser = async (id: string) => {
    const user = await prismaInstance.user.findUnique({
      where: {
        id,
      },
      select: {
        email: true,
        id: true,
        posts: {
          select: {
            body: true,
            title: true,
            id: true,
            slug: true,
          },
        },
      },
    });

    return user;
  };

  public login = async (userData: Pick<User, 'email' | 'password'>) => {
    const user = await prismaInstance.user.findUnique({
      where: {
        email: userData.email,
      },
    });

    if (!user) {
      throw new BadRequest('User does not exist');
    }

    const isValid = user.password === getHashedPassword(userData.password);
    if (!isValid) {
      throw new BadRequest('Invalid password');
    }

    const token = generateAccessToken(user.id);

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  };

  public getOneUserById = async (id: string) => {
    const user = await prismaInstance.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  };
}
