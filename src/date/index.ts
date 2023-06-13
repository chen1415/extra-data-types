import type { DateSchema } from './index.d';
import { regDateConfig } from './config';

export * from '.';

export const is_YYYYMMDD_Type = (x: unknown): x is DateSchema.YYYYMMDD_Type =>
  regDateConfig.YYYYMMDD_RegConfig.test(String(x));

export const is_YYYYMMMDD_Type = (x: unknown): x is DateSchema.YYYYMMMDD_Type =>
  regDateConfig.YYYYMMMDD_RegConfig.test(String(x));

export const is_DDMMYYYY_Type = (x: unknown): x is DateSchema.DDMMYYYY_Type =>
  regDateConfig.DDMMYYYY_RegConfig.test(String(x));

export const is_DDMMMYYYY_Type = (x: unknown): x is DateSchema.DDMMMYYYY_Type =>
  regDateConfig.DDMMMYYYY_RegConfig.test(String(x));

export const is_DDMMMYY_Type = (x: unknown): x is DateSchema.DDMMMYY_Type =>
  regDateConfig.DDMMMYY_RegConfig.test(String(x));
