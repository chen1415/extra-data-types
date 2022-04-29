import { isEmail } from "./index";

test("test email type: true", () => {
  expect(isEmail("aaa")).toBe(true);
});

test("test email type: false", () => {
  expect(isEmail(112)).toBe(false);
});
