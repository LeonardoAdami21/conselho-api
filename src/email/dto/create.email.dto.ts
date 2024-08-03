import { ApiProperty } from '@nestjs/swagger';

export class CreateEmailDto {
  @ApiProperty({
    type: String,
    example: 'olamundo@gmail.com',
    description: 'Email',
  })
  email: string;
}
