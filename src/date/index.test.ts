import { is_YYYYMMDD_Type } from './index';
import { is_YYYYMMMDD_Type } from './index';
import { is_DDMMYYYY_Type } from './index';
import { is_DDMMMYYYY_Type } from './index';
import { is_DDMMMYY_Type } from './index';

// =================test YYYY-MM-DD Type==================
test('test YYYY-MM-DD type => true', () => {
  expect(is_YYYYMMDD_Type('2014-08-29')).toBe(true);
});

test('test YYYY-MM-DD type => false', () => {
  expect(is_YYYYMMDD_Type('2014_08_29')).toBe(false);
});

test('test YYYY-MM-DD type => false', () => {
  expect(is_YYYYMMDD_Type('2014-08-29t06:44:03Z')).toBe(false);
});

test('test YYYY-MM-DD type => false', () => {
  expect(is_YYYYMMDD_Type('2014-08-29T')).toBe(false);
});

test('test YYYY-MM-DD type => false', () => {
  expect(is_YYYYMMDD_Type('20140829')).toBe(false);
});

test('test YYYY-MM-DD type => false', () => {
  expect(is_YYYYMMDD_Type('2014_FEB_29')).toBe(false);
});

// =================test YYYY-MMM-DD Type==================

test('test YYYY-MMM-DD type => true', () => {
  expect(is_YYYYMMMDD_Type('2014-FEB-29')).toBe(true);
});

test('test YYYY-MMM-DD type => false', () => {
  expect(is_YYYYMMMDD_Type('2014_02_29')).toBe(false);
});

test('test YYYY-MMM-DD type => false', () => {
  expect(is_YYYYMMMDD_Type('2014-02-29')).toBe(false);
});

test('test YYYY-MMM-DD type => false', () => {
  expect(is_YYYYMMMDD_Type('2014FEB29')).toBe(false);
});

// =================test DD-MM-YYYY Type==================

test('test DD-MM-YYYY type => true', () => {
  expect(is_DDMMYYYY_Type('23-09-2022')).toBe(true);
});

test('test DD-MM-YYYY type => false', () => {
  expect(is_DDMMYYYY_Type('2022_09_23')).toBe(false);
});

test('test DD-MM-YYYY type => false', () => {
  expect(is_DDMMYYYY_Type('23-SEP-2022')).toBe(false);
});

test('test DD-MM-YYYY type => false', () => {
  expect(is_DDMMYYYY_Type('2022SEP23')).toBe(false);
});

// =================test DD-MMM-YYYY Type==================

test('test DD-MMM-YYYY type => true', () => {
  expect(is_DDMMMYYYY_Type('23-SEP-2022')).toBe(true);
});

test('test DD-MMM-YYYY type => false', () => {
  expect(is_DDMMMYYYY_Type('2022_09_23')).toBe(false);
});

test('test DD-MMM-YYYY type => false', () => {
  expect(is_DDMMMYYYY_Type('23-09-2022')).toBe(false);
});

test('test DD-MMM-YYYY type => false', () => {
  expect(is_DDMMMYYYY_Type('2022SEP23')).toBe(false);
});

// =================test DD-MMM-YY Type==================

test('test DD-MMM-YY type => true', () => {
  expect(is_DDMMMYY_Type('23-SEP-22')).toBe(true);
});

test('test DD-MMM-YY type => false', () => {
  expect(is_DDMMMYY_Type('2022_09_23')).toBe(false);
});

test('test DD-MMM-YY type => false', () => {
  expect(is_DDMMMYY_Type('23-09-2022')).toBe(false);
});

test('test DD-MMM-YY type => false', () => {
  expect(is_DDMMMYY_Type('2022SEP23')).toBe(false);
});
