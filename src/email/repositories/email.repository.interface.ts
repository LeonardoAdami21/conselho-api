import { Email } from '@prisma/client';
import { CreateEmailDto } from '../dto/create.email.dto';

export interface EmailRepositoryInterface {
  create(dto: CreateEmailDto): Promise<Email>;
  findByEmail(email: string): Promise<Email>;
}
