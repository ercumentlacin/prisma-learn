import { Post } from '@prisma/client';

import { Services } from '../extends';

export class PostServices extends Services {
  public async getAllPosts() {
    const data = await this.prismaInstance.post.findMany();
    return data;
  }

  public createPost = async (postData: Post) => {
    const newPost = await this.prismaInstance.post.create({
      data: postData,
    });

    return newPost;
  };
}
