import { regDateConfig } from './config';

export declare namespace DateSchema {
  type YYYY_MM_DD_TYPE = typeof regDateConfig.YYYYMMDD_REGCONFIG;
  type YYYY_MMM_DD_TYPE = typeof regDateConfig.YYYYMMMDD_REGCONFIG;
}
