import { regEmailConfig } from './config';

export declare namespace EmailSchema {
  type Gmail_Type = typeof regEmailConfig.gamil_RegConfig;
  type QQmail_Type = typeof regEmailConfig.qq_RegConfig;
  type StandardEmail_Type = typeof regEmailConfig.standard_RegConfig;
}
