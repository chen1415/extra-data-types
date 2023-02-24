import { IS_YYYY_MM_DD_TYPE } from './index';
import { IS_YYYY_MMM_DD_TYPE } from './index';

// =================test YYYY-MM-DD Type==================
test('test YYYY-MM-DD type => true', () => {
  expect(IS_YYYY_MM_DD_TYPE('2014-08-29')).toBe(true);
});

test('test YYYY-MM-DD type => false', () => {
  expect(IS_YYYY_MM_DD_TYPE('2014_08_29')).toBe(false);
});

test('test YYYY-MM-DD type => false', () => {
  expect(IS_YYYY_MM_DD_TYPE('2014-08-29t06:44:03Z')).toBe(false);
});

test('test YYYY-MM-DD type => false', () => {
  expect(IS_YYYY_MM_DD_TYPE('2014-08-29T')).toBe(false);
});

test('test YYYY-MM-DD type => false', () => {
  expect(IS_YYYY_MM_DD_TYPE('20140829')).toBe(false);
});

test('test YYYY-MM-DD type => false', () => {
  expect(IS_YYYY_MM_DD_TYPE('2014_FEB_29')).toBe(false);
});

// =================test YYYY-MMM-DD Type==================

test('test YYYY-MMM-DD type => true', () => {
  expect(IS_YYYY_MMM_DD_TYPE('2014-FEB-29')).toBe(true);
});

test('test YYYY-MMM-DD type => false', () => {
  expect(IS_YYYY_MMM_DD_TYPE('2014_02_29')).toBe(false);
});

test('test YYYY-MMM-DD type => false', () => {
  expect(IS_YYYY_MMM_DD_TYPE('2014-02-29')).toBe(false);
});

test('test YYYY-MMM-DD type => false', () => {
  expect(IS_YYYY_MMM_DD_TYPE('2014FEB29')).toBe(false);
});
