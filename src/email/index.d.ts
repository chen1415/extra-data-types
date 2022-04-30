import { regEmailConfig } from "./config";

export declare namespace EmailType {
  type GmailType = typeof regEmailConfig.gamilRegConfig;
  type StandardType = typeof regEmailConfig.standardRegConfig;
}
