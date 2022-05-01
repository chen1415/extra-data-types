import type { EmailSchema } from './index.d';
import { regEmailConfig } from './config';

export * from './index.d';

export const isGmailType = (x: any): x is EmailSchema.GmailType =>
  regEmailConfig.gamilRegConfig.test(String(x).toLowerCase());

export const isQQmailType = (x: any): x is EmailSchema.QQmailType =>
  regEmailConfig.qqRegConfig.test(String(x).toLowerCase());

export const isStandardEmailType = (x: any): x is EmailSchema.StandardEmailType =>
  regEmailConfig.standardRegConfig.test(String(x).toLowerCase());
