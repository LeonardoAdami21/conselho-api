import { Email, PrismaClient } from '@prisma/client';
import { EmailRepositoryInterface } from './email.repository.interface';
import { Inject, Injectable } from '@nestjs/common';
import { CreateEmailDto } from '../dto/create.email.dto';

@Injectable()
export class EmailRepository implements EmailRepositoryInterface {
  constructor(@Inject('db__client') private readonly dbClient: PrismaClient) {}

  private readonly emailRepository = this.dbClient.email;
  async create(dto: CreateEmailDto): Promise<Email> {
    return await this.emailRepository.create({
      data: dto
    });
  }

  async findByEmail(email: string): Promise<Email> {
    return await this.emailRepository.findFirst({
      where: {
        email: email,
      },
    });
  }
}
