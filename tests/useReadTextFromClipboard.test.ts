import { renderHook } from '@testing-library/react';
import useReadTextFromClipboard from '../src/useReadTextFromClipboard';
import { useWebApp, WebApp } from '../src/core';

describe('useReadTextFromClipboard', () => {
  it('checks correct call WebApp.readTextFromClipboard api', async () => {
    const { result } = renderHook(useReadTextFromClipboard);
    const readTextFromClickBoard = result.current;

    jest
      .spyOn(useWebApp() as WebApp, 'readTextFromClipboard')
      .mockImplementation(resolve => {
        resolve!('TEST_CLICK');
      });
    const text = await readTextFromClickBoard();

    expect(text).toBe('TEST_CLICK');
  });
});
