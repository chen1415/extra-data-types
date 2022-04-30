import { regEmailConfig } from "./config";

export declare type EmailType = {
  GmailType: typeof regEmailConfig.gamilRegConfig;
  StandardType: typeof regEmailConfig.standardRegConfig;
};
