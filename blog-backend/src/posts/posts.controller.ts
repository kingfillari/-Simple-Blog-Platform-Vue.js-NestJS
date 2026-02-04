import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { PostsService, Post as PostType } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPosts(): PostType[] {
    return this.postsService.findAll();
  }

  @Post()
  createPost(@Body() body: PostType): PostType {
    return this.postsService.create(body);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string): void {
    return this.postsService.remove(Number(id));
  }
}