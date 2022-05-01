import { regEmailConfig } from './config';

export declare namespace EmailSchema {
  type GmailType = typeof regEmailConfig.gamilRegConfig;
  type QQmailType = typeof regEmailConfig.qqRegConfig;
  type StandardEmailType = typeof regEmailConfig.standardRegConfig;
}
