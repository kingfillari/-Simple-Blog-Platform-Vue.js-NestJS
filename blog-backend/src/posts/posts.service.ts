import { Injectable } from '@nestjs/common';

export interface Post {
  id: number;
  title: string;
  content: string;
}

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  findAll(): Post[] {
    return this.posts;
  }

  create(post: Post): Post {
    this.posts.push(post);
    return post;
  }

  remove(id: number): void {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}