import { renderHook } from '@testing-library/react';

import { useWebApp } from '../src/core';
import useSwitchInlineQuery from '../src/useSwitchInlineQuery';

describe('useSwitchInlineQuery', () => {
  it('checks correct call WebApp.switchInlineQuery api', () => {
    const { result } = renderHook(useSwitchInlineQuery);
    const switchInlineQuery = result.current;

    switchInlineQuery('Test string');
    expect(useWebApp()!.switchInlineQuery).toBeCalledWith('Test string');

    switchInlineQuery('Test string 2', ['groups']);
    expect(useWebApp()!.switchInlineQuery).toBeCalledWith('Test string 2', [
      'groups',
    ]);

    expect(useWebApp()!.switchInlineQuery).toBeCalledTimes(2);
  });
});
