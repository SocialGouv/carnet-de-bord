import { getSmtpConfig } from '$lib/config/variables/private';
import nodemailer from 'nodemailer';
import type Mail from 'nodemailer/lib/mailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

const { SMTP_FROM, SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER } = getSmtpConfig();

const smtpConfig = {
	host: SMTP_HOST,
	ignoreTLS: false,
	port: SMTP_PORT,
	requireTLS: true,
	secure: true,
	...(/maildev/.test(SMTP_HOST) && {
		tls: { rejectUnauthorized: false },
	}),
	...(SMTP_PASS &&
		SMTP_USER && {
			auth: {
				pass: SMTP_PASS,
				user: SMTP_USER,
			},
		}),
};

export function send({
	to,
	subject,
	text,
	html,
	bcc,
}: Mail.Options): Promise<SMTPTransport.SentMessageInfo> {
	const transporter = nodemailer.createTransport(smtpConfig);
	const mailOptions = {
		bcc,
		from: SMTP_FROM,
		html,
		subject,
		text,
		to,
	};
	return transporter.sendMail(mailOptions);
}
