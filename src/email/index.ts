import type { EmailSchema } from './index.d';
import { regEmailConfig } from './config';

export * from './index.d';

export const is_Gmail_Type = (x: unknown): x is EmailSchema.Gmail_Type =>
  regEmailConfig.gamil_RegConfig.test(String(x).toLowerCase());

export const is_QQmail_Type = (x: unknown): x is EmailSchema.QQmail_Type =>
  regEmailConfig.qq_RegConfig.test(String(x).toLowerCase());

export const is_StandardEmail_Type = (x: unknown): x is EmailSchema.StandardEmail_Type =>
  regEmailConfig.standard_RegConfig.test(String(x).toLowerCase());
