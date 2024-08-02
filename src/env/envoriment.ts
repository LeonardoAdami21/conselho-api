import * as dotenv from 'dotenv';
dotenv.config();

export const envoriment = {
  appPort: process.env.APP_PORT || 3000,
  mailerHost: process.env.MAILLERTRAP_EMAIL,
  mailerPort: Number(process.env.MAILLERTRAP_PORT),
  mailerUser: process.env.MAILLERTRAP_USER,
  mailerPassword: process.env.MAILLERTRAP_USER_PASS,
};
