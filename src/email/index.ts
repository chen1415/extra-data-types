import type { EmailType } from './index.d';
import { regEmailConfig } from './config';

export * from './index.d';

export const isGmailType = (x: any): x is EmailType.GmailType =>
  regEmailConfig.gamilRegConfig.test(String(x).toLowerCase());

export const isQQmailType = (x: any): x is EmailType.QQmailType =>
  regEmailConfig.qqRegConfig.test(String(x).toLowerCase());

export const isStandardEmailType = (x: any): x is EmailType.StandardType =>
  regEmailConfig.standardRegConfig.test(String(x).toLowerCase());
