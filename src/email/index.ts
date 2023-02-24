import type { EmailSchema } from './index.d';
import { regEmailConfig } from './config';

export * from './index.d';

export const IS_GMAIL_TYPE = (x: unknown): x is EmailSchema.GMAIL_TYPE =>
  regEmailConfig.GMAIL_REGCONFIG.test(String(x).toLowerCase());

export const IS_QQ_MAIL_TYPE = (x: unknown): x is EmailSchema.QQ_MAIL_TYPE =>
  regEmailConfig.QQ_REGCONFIG.test(String(x).toLowerCase());

export const IS_STANDARD_EMAIL_TYPE = (x: unknown): x is EmailSchema.STANDARD_EMAIL_TYPE =>
  regEmailConfig.STANDARD_REGCONFIG.test(String(x).toLowerCase());
