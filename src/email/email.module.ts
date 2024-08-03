import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { envoriment } from '../env/envoriment';
import { PrismaClient } from '@prisma/client';
import { EmailRepository } from './repositories/email.repository';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: envoriment.mailerHost,
        port: envoriment.mailerPort,
        secure: false,
        auth: {
          user: envoriment.mailerUser,
          pass: envoriment.mailerPassword,
        },
      },
      defaults: {
        from: '"No Reply" <modules@nestjs.com>',
      },
    }),
  ],
  controllers: [EmailController],
  providers: [
    EmailService,
    {
      provide: 'db__client',
      useClass: PrismaClient,
    },
    {
      provide: 'email__repository',
      useClass: EmailRepository,
    },
  ],
})
export class EmailModule {}
