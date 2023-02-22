import { isStandardEmailType, isGmailType, isQQmailType } from './index';

test('test gmail type => true', () => {
  expect(isGmailType('example@gmail.com')).toBe(true);
});

test('test gmail type => false', () => {
  expect(isGmailType('example@cmail.com')).toBe(false);
});

test('test qq-mail type => true', () => {
  expect(isQQmailType('example@qq.com')).toBe(true);
});

test('test qq-mail type => false', () => {
  expect(isQQmailType('example@qa.com')).toBe(false);
});

test('test standard email type => true', () => {
  expect(isStandardEmailType('example.example@example.com')).toBe(true);
});

test('test standard email type => false', () => {
  expect(isStandardEmailType('abcdwww')).toBe(false);
});

test('test email type => false', () => {
  expect(isStandardEmailType(112)).toBe(false);
});

test('test email type => false', () => {
  expect(isStandardEmailType('asdkfjaksdjfaskjfka')).toBe(false);
});

test('test email type => false', () => {
  expect(isStandardEmailType('aaa')).toBe(false);
});

test('test email type => false', () => {
  expect(isStandardEmailType('bbb')).toBe(false);
});

test('test email type => false', () => {
  expect(isStandardEmailType('ccc')).toBe(false);
});
