import { Controller, Get, Post as HttpPost, Delete, Body, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import type { Post as BlogPost } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAll(): BlogPost[] {
    return this.postsService.findAll();
  }

  @HttpPost()
  create(@Body() body: BlogPost): BlogPost {
    return this.postsService.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    return this.postsService.remove(Number(id));
  }
}