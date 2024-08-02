import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private readonly mailService: MailerService) {}

  async sendEmail(email: string) {
    const mail = {
      to: email,
      from: 'modules@nestjs.com',
      text: 'Testing',
      subject: 'Testing Nest MailerModule ✔',
      html: '<b>Welcome</b>',
    };
    await this.mailService
      .sendMail(mail)
      .then(() => {})
      .catch(() => {});
  }
}
