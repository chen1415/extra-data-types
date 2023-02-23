import { isYYYY_MM_DDType } from './index';
import { isYYYY_MMM_DDType } from './index';

test('test YYYY_MM_DD type => true', () => {
  expect(isYYYY_MM_DDType('2014_08_29')).toBe(true);
});

test('test YYYY_MM_DD type => false', () => {
  expect(isYYYY_MM_DDType('2014-08-29t06:44:03Z')).toBe(false);
});

test('test YYYY_MM_DD type => false', () => {
  expect(isYYYY_MM_DDType('2014-08-29T')).toBe(false);
});

test('test YYYY_MM_DD type => false', () => {
  expect(isYYYY_MM_DDType('2014-08-29')).toBe(false);
});

test('test YYYY_MM_DD type => false', () => {
  expect(isYYYY_MM_DDType('20140829')).toBe(false);
});

test('test YYYY_MM_DD type => false', () => {
  expect(isYYYY_MM_DDType('2014_FEB_29')).toBe(false);
});

test('test YYYY_MMM_DD type => true', () => {
  expect(isYYYY_MMM_DDType('2014_FEB_29')).toBe(true);
});

test('test YYYY_MMM_DD type => false', () => {
  expect(isYYYY_MMM_DDType('2014_02_29')).toBe(false);
});

test('test YYYY_MMM_DD type => false', () => {
  expect(isYYYY_MMM_DDType('2014-FEB-29')).toBe(false);
});

test('test YYYY_MMM_DD type => false', () => {
  expect(isYYYY_MMM_DDType('2014FEB29')).toBe(false);
});