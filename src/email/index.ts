import type { EmailSchema } from './index.d';
import { regEmailConfig } from './config';

export * from './index.d';

export const IS_GMAIL_TYPE = (x: unknown): x is EmailSchema.Gmail_Type =>
  regEmailConfig.gamil_RegConfig.test(String(x).toLowerCase());

export const IS_QQMAIL_TYPE = (x: unknown): x is EmailSchema.QQmail_Type =>
  regEmailConfig.qq_RegConfig.test(String(x).toLowerCase());

export const IS_STANDARD_EMAIL_TYPE = (x: unknown): x is EmailSchema.StandardEmail_Type =>
  regEmailConfig.standard_RegConfig.test(String(x).toLowerCase());
