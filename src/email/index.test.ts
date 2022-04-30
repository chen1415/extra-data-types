import { isEmailType } from "./index";

test("test gmail type: true", () => {
  expect(isEmailType("example@gmail.com")).toBe(true);
});

test("test standard email type: true", () => {
  expect(isEmailType("example.example@example.com")).toBe(true);
});

test("test email type: false", () => {
  expect(isEmailType('abcdwww')).toBe(false);
});

test("test email type: false", () => {
  expect(isEmailType(112)).toBe(false);
});
