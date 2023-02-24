import { regEmailConfig } from './config';

export declare namespace EmailSchema {
  type GMAIL_TYPE = typeof regEmailConfig.GMAIL_REGCONFIG;
  type QQ_MAIL_TYPE = typeof regEmailConfig.QQ_REGCONFIG;
  type STANDARD_EMAIL_TYPE = typeof regEmailConfig.STANDARD_REGCONFIG;
}
