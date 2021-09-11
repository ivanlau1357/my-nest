// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post as PostClass } from './schemas/post.schema';
import { MyLogger } from 'src/logger/logger.service';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly logger: MyLogger,
  ) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto): Promise<PostClass> {
    return this.postsService.create(createPostDto);
  }

  @Get()
  async findAll(): Promise<PostClass[]> {
    this.logger.info('will', 'findAll', {});
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
