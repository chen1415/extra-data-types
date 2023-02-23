import type { DateSchema } from './index.d';
import { regDateConfig } from './config';

export * from '.';

export const is_YYYYMMDD_Type = (x: unknown): x is DateSchema.YYYYMMDD_Type => regDateConfig.YYYYMMDD_RegConfig.test(String(x));

export const is_YYYYMMMDD_Type = (x: unknown): x is DateSchema.YYYYMMMDD_Type => regDateConfig.YYYYMMMDD_RegConfig.test(String(x));
