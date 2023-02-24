import type { DateSchema } from './index.d';
import { regDateConfig } from './config';

export * from '.';

export const IS_YYYYMMDD_TYPE = (x: unknown): x is DateSchema.YYYYMMDD_Type =>
  regDateConfig.YYYYMMDD_RegConfig.test(String(x));

export const IS_YYYYMMMDD_TYPE = (x: unknown): x is DateSchema.YYYYMMMDD_Type =>
  regDateConfig.YYYYMMMDD_RegConfig.test(String(x));
