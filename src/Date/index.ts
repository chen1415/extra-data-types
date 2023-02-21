import type { DateSchema } from './index.d';
import { regDateConfig } from './config';

export * from './index.d';

export const isUTCType = (x: any): x is DateSchema.UTCType => regDateConfig.utcRegConfig.test(String(x));
