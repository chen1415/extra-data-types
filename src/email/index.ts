import { EmailType } from "./index.d";

export const isEmail = (x: any): x is EmailType => {
  return typeof x === "string";
};
