import { is_YYYYMMDD_Type } from './index';
import { is_YYYYMMMDD_Type } from './index';

//=================test YYYYMMDD Type==================
test('test YYYYMMDD type => true', () => {
  expect(is_YYYYMMDD_Type('2014-08-29')).toBe(true);
});

test('test YYYYMMDD type => false', () => {
  expect(is_YYYYMMDD_Type('2014_08_29')).toBe(false);
});

test('test YYYYMMDD type => false', () => {
  expect(is_YYYYMMDD_Type('2014-08-29t06:44:03Z')).toBe(false);
});

test('test YYYYMMDD type => false', () => {
  expect(is_YYYYMMDD_Type('2014-08-29T')).toBe(false);
});

test('test YYYYMMDD type => false', () => {
  expect(is_YYYYMMDD_Type('20140829')).toBe(false);
});

test('test YYYYMMDD type => false', () => {
  expect(is_YYYYMMDD_Type('2014_FEB_29')).toBe(false);
});

//=================test YYYYMMMDD Type==================

test('test YYYYMMMDD type => true', () => {
  expect(is_YYYYMMMDD_Type('2014-FEB-29')).toBe(true);
});

test('test YYYYMMMDD type => false', () => {
  expect(is_YYYYMMMDD_Type('2014_02_29')).toBe(false);
});

test('test YYYYMMMDD type => false', () => {
  expect(is_YYYYMMMDD_Type('2014-02-29')).toBe(false);
});

test('test YYYYMMMDD type => false', () => {
  expect(is_YYYYMMMDD_Type('2014FEB29')).toBe(false);
});