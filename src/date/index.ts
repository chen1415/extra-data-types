import type { DateSchema } from './index.d';
import { regDateConfig } from './config';

export * from '.';

export const isYYYY_MM_DDType = (x: any): x is DateSchema.YYYY_MM_DDType => regDateConfig.YYYY_MM_DDRegConfig.test(String(x));

export const isYYYY_MMM_DDType = (x: any): x is DateSchema.YYYY_MM_DDType => regDateConfig.YYYY_MMM_DDRegConfig.test(String(x));
