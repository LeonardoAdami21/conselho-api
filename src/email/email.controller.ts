import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('email')
@ApiTags('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'olamundo@gmail.com',
        },
      },
    },
  })
  @ApiCreatedResponse({ description: 'Email enviado com sucesso' })
  @ApiNotFoundResponse({ description: 'Email não encontrado' })
  async sendEmail(@Body() email: string) {
    await this.emailService.sendEmail(email);
  }
}
