import type { EmailType } from "./index.d";
import { emailRegConfig } from "./config";

export const isEmailType = (x: any): x is EmailType =>
emailRegConfig.test(String(x).toLowerCase());
