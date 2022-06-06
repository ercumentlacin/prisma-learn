import { prismaInstance } from '../utils/connectPrisma';

export class UserServices {
  public getAllUsers = async () => {
    const users = await prismaInstance.user.findMany();
    return users;
  };
}
