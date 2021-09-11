import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ default: 'title', type: String })
  title: string;
  @ApiProperty({ default: 'title', type: String })
  comment: string;
}
