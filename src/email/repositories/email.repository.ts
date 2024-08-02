import { PrismaClient } from '@prisma/client';
import { EmailRepositoryInterface } from './email.repository.interface';

export class EmailRepository implements EmailRepositoryInterface {
  constructor(private readonly emailRepository: PrismaClient) {}

  async create(email: string): Promise<any> {
    return await this.emailRepository.email.create({
      data: {
        email: email,
      },
    });
  }

  async findEmail(email: string): Promise<any> {
    return await this.emailRepository.email.findUnique({
      where: {
        email: email,
      },
    });
  }
}
