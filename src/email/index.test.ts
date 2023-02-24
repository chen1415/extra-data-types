import { IS_STANDARD_EMAIL_TYPE, IS_GMAIL_TYPE, IS_QQ_MAIL_TYPE } from './index';

// =================test Gmail Type==================
test('test gmail type => true', () => {
  expect(IS_GMAIL_TYPE('example@gmail.com')).toBe(true);
});

test('test gmail type => false', () => {
  expect(IS_GMAIL_TYPE('example@cmail.com')).toBe(false);
});

// =================test QQmail Type==================
test('test qq-mail type => true', () => {
  expect(IS_QQ_MAIL_TYPE('example@qq.com')).toBe(true);
});

test('test qq-mail type => false', () => {
  expect(IS_QQ_MAIL_TYPE('example@qa.com')).toBe(false);
});

// =================test Standard Email Type==================

test('test standard email type => true', () => {
  expect(IS_STANDARD_EMAIL_TYPE('example.example@example.com')).toBe(true);
});

test('test standard email type => false', () => {
  expect(IS_STANDARD_EMAIL_TYPE('abcdwww')).toBe(false);
});

test('test standard email type => false', () => {
  expect(IS_STANDARD_EMAIL_TYPE(112)).toBe(false);
});

test('test standard email type => false', () => {
  expect(IS_STANDARD_EMAIL_TYPE('asdkfjaksdjfaskjfka')).toBe(false);
});

test('test standard email type => false', () => {
  expect(IS_STANDARD_EMAIL_TYPE('aaa')).toBe(false);
});

test('test standard email type => false', () => {
  expect(IS_STANDARD_EMAIL_TYPE('ccccc')).toBe(false);
});
