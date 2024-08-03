import { MailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create.email.dto';
import { EmailRepositoryInterface } from './repositories/email.repository.interface';
import axios, { AxiosError } from 'axios';
import { envoriment } from '../env/envoriment';

@Injectable()
export class EmailService {
  constructor(
    @Inject('email__repository')
    private emailRepository: EmailRepositoryInterface,
    private readonly mailService: MailerService,
  ) {}

  async create(dto: CreateEmailDto) {
    try {
      const conselho = await axios
        .get(`${envoriment.conselhoUrl}`)
        .then((res) => res.data.slip.advice)
        .catch((error: AxiosError) => {
          console.log(error);
        });

      const mail = {
        to: dto.email,
        from: 'modules@nestjs.com',
        text: 'Conselho do dia',
        subject: 'Testing Nest MailerModule ✔',
        html: `<b>Bom dia o conselho do dia é : ${conselho} </b>`,
      };
      await this.mailService.sendMail(mail);
      const result = await this.emailRepository.create(dto);
      return result;
    } catch (error) {}
  }
}
