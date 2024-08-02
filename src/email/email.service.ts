import { MailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create.email.dto';
import { EmailRepository } from './repositories/email.repository';
import { EmailRepositoryInterface } from './repositories/email.repository.interface';

@Injectable()
export class EmailService {
  constructor(
    @Inject('email__repository')
    private emailRepository: EmailRepositoryInterface,
    private readonly mailService: MailerService,
  ) {}

  async create(dto: CreateEmailDto) {
    const mail = {
      to: dto.email,
      from: 'modules@nestjs.com',
      text: 'Testing',
      subject: 'Testing Nest MailerModule ✔',
      html: '<b>Welcome</b>',
    };
    await this.mailService.sendMail(mail);
    const result = await this.emailRepository.create(dto);
    return result;
  }
}
