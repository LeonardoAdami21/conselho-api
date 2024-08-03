import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateEmailDto } from './dto/create.email.dto';

@Controller('email')
@ApiTags('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('')
  @ApiCreatedResponse({ description: 'Email enviado com sucesso' })
  @ApiNotFoundResponse({ description: 'Email não encontrado' })
  @ApiInternalServerErrorResponse({ description: 'Erro interno' })
  async create(@Body() dto: CreateEmailDto) {
    return await this.emailService.create(dto);
  }
}
