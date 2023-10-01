import { renderHook } from '@testing-library/react';
import useReadTextFromClipboard from '../src/useReadTextFromClipboard';
import { useWebApp } from '../src/core';
import { WebApp } from '../src/core/twa-types';

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
