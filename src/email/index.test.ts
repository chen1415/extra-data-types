import { is_StandardEmail_Type, is_Gmail_Type, is_QQmail_Type } from './index';

test('test gmail type => true', () => {
  expect(is_Gmail_Type('example@gmail.com')).toBe(true);
});

test('test gmail type => false', () => {
  expect(is_Gmail_Type('example@cmail.com')).toBe(false);
});

test('test qq-mail type => true', () => {
  expect(is_QQmail_Type('example@qq.com')).toBe(true);
});

test('test qq-mail type => false', () => {
  expect(is_QQmail_Type('example@qa.com')).toBe(false);
});

test('test standard email type => true', () => {
  expect(is_StandardEmail_Type('example.example@example.com')).toBe(true);
});

test('test standard email type => false', () => {
  expect(is_StandardEmail_Type('abcdwww')).toBe(false);
});

test('test email type => false', () => {
  expect(is_StandardEmail_Type(112)).toBe(false);
});

test('test email type => false', () => {
  expect(is_StandardEmail_Type('asdkfjaksdjfaskjfka')).toBe(false);
});

test('test email type => false', () => {
  expect(is_StandardEmail_Type('aaa')).toBe(false);
});

test('test email type => false', () => {
  expect(is_StandardEmail_Type('ccccc')).toBe(false);
});
