import { regEmailConfig } from "./config";

export declare namespace EmailType {
  type GmailType = typeof regEmailConfig.gamilRegConfig;
  type QQmailType = typeof regEmailConfig.qqRegConfig;
  type StandardType = typeof regEmailConfig.standardRegConfig;
}
