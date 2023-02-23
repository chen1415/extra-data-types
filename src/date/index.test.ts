import { isUTCType } from './index';

test('test utc type => true', () => {
  expect(isUTCType('2014-08-29T06:44:03Z')).toBe(true);
});

test('test utc type => false', () => {
  expect(isUTCType('2014-08-29t06:44:03Z')).toBe(false);
});

test('test utc type => false', () => {
  expect(isUTCType('2014-08-29T06:44:03z')).toBe(false);
});

test('test utc type => false', () => {
  expect(isUTCType('2014-08-29a06:44:03z')).toBe(false);
});

test('test utc type => false', () => {
  expect(isUTCType('20140829t06:44:03z')).toBe(false);
});

test('test utc type => false', () => {
  expect(isUTCType('2014-08-29t064403z')).toBe(false);
});
