import type { DateSchema } from './index.d';
import { regDateConfig } from './config';

export * from '.';

export const IS_YYYY_MM_DD_TYPE = (x: unknown): x is DateSchema.YYYY_MM_DD_TYPE =>
  regDateConfig.YYYY_MM_DD_REGCONFIG.test(String(x));

export const IS_YYYY_MMM_DD_TYPE = (x: unknown): x is DateSchema.YYYY_MMM_DD_TYPE =>
  regDateConfig.YYYY_MMM_DD_REGCONFIG.test(String(x));
