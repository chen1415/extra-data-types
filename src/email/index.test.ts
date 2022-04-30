import { isEmailType, isGmailType } from "./index";

test("test gmail type => true", () => {
  expect(isGmailType("example@gmail.com")).toBe(true);
});

test("test gmail type => false", () => {
  expect(isGmailType("example@cmail.com")).toBe(false);
});

test("test standard email type => true", () => {
  expect(isEmailType("example.example@example.com")).toBe(true);
});

test("test standard email type => false", () => {
  expect(isEmailType("abcdwww")).toBe(false);
});

test("test email type => false", () => {
  expect(isEmailType(112)).toBe(false);
});
