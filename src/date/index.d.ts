import { regDateConfig } from './config';

export declare namespace DateSchema {
  type YYYY_MM_DDType = typeof regDateConfig.YYYY_MM_DDRegConfig;
  type YYYY_MMM_DDType = typeof regDateConfig.YYYY_MMM_DDRegConfig;
}
