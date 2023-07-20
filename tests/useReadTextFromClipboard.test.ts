import { renderHook } from '@testing-library/react';
import useReadTextFromClipboard from '../src/useReadTextFromClipboard';
import useWebApp from '../src/useWebApp';

jest.mock('../src/useWebApp');

describe('useReadTextFromClipboard', () => {
  it('checks correct call WebApp.readTextFromClipboard api', async () => {
    const { result } = renderHook(useReadTextFromClipboard);
    const readTextFromClickBoard = result.current;

    (useWebApp()?.readTextFromClipboard as jest.Mock).mockImplementation(
      resolve => {
        resolve('TEST_CLICK');
      },
    );
    const text = await readTextFromClickBoard();

    expect(text).toBe('TEST_CLICK');
  });
});
