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

  public getOnePost = async (id: string) => {
    const post = await this.prismaInstance.post.findUnique({
      where: {
        id,
      },
    });

    return post;
  };

  public updatePost = async (id: string, postData: Post) => {
    const post = await this.prismaInstance.post.update({
      where: {
        id,
      },
      data: {
        title: postData.title,
        body: postData.body,
      },
    });

    return post;
  };
}
