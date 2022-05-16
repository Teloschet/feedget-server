import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter'

// NODEMAILER
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b4314c18b1f10c",
    pass: "af0a7adfb88b84"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Christopher Arthur <chrisaleiro@gmail.com>',
      subject,
      html: body,
    })
  };
}