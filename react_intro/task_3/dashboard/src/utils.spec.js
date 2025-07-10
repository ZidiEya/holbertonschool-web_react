// task_3/dashboard/src/utils.spec.js

import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils.js tests', () => {
  test('getCurrentYear returns the current year', () => {
    const expectedYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(expectedYear);
  });

  test('getFooterCopy returns correct string when argument is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('getFooterCopy returns correct string when argument is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  test('getLatestNotification returns correct string (HTML)', () => {
    const result = getLatestNotification();
    expect(result).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
