import type { DateSchema } from './index.d';
import { regDateConfig } from './config';

export * from '.';

export const isUTCType = (x: any): x is DateSchema.UTCType => regDateConfig.utcRegConfig.test(String(x));
