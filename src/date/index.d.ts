import { regDateConfig } from './config';

export declare namespace DateSchema {
  type YYYYMMDD_Type = typeof regDateConfig.YYYYMMDD_RegConfig;
  type YYYYMMMDD_Type = typeof regDateConfig.YYYYMMMDD_RegConfig;
  type DDMMYYYY_Type = typeof regDateConfig.DDMMYYYY_RegConfig;
  type DDMMMYYYY_Type = typeof regDateConfig.DDMMMYYYY_RegConfig;
  type DDMMMYY_Type = typeof regDateConfig.DDMMMYY_RegConfig;
}
