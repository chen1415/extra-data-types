import type { EmailType } from "./index.d";
import { regEmailConfig } from "./config";

export const isGmailType = (x: any): x is EmailType.GmailType =>
  regEmailConfig.gamilRegConfig.test(String(x).toLowerCase());

export const isEmailType = (x: any): x is EmailType.StandardType =>
  regEmailConfig.standardRegConfig.test(String(x).toLowerCase());
