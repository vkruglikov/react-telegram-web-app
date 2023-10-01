import { act, renderHook } from '@testing-library/react';

import { useWebApp } from '../src/core';
import { WebApp } from '../src/core/twa-types';
import useThemeParams from '../src/useThemeParams';

describe('useThemeParams', () => {
  it('checks is correct initial value return', () => {
    jest.replaceProperty(useWebApp() as WebApp, 'colorScheme', 'dark');
    jest.replaceProperty(useWebApp() as WebApp, 'themeParams', {
      bg_color: '#fff',
    });

    const { result } = renderHook(useThemeParams);
    const [colorScheme, themeParams] = result.current;

    expect(colorScheme).toBe('dark');
    expect(themeParams).toEqual({
      bg_color: '#fff',
    });
  });

  it('checks correct return value after fire onEvent', function () {
    let handleOnEvent = () => {};
    jest
      .spyOn(useWebApp() as WebApp, 'onEvent')
      .mockImplementation((_, handler) => {
        handleOnEvent = handler;
      });

    const { result } = renderHook(useThemeParams);
    expect(result.current[0]).toBe(undefined);
    expect(result.current[1]).toEqual({});

    expect(useWebApp()?.onEvent).toBeCalledWith(
      'themeChanged',
      expect.any(Function),
    );
    expect(useWebApp()?.onEvent).toBeCalledTimes(1);

    jest.replaceProperty(useWebApp() as WebApp, 'colorScheme', 'dark');
    jest.replaceProperty(useWebApp() as WebApp, 'themeParams', {
      bg_color: '#000',
    });
    act(() => {
      handleOnEvent();
    });

    act(() => {
      expect(result.current[0]).toBe('dark');
      expect(result.current[1]).toEqual({
        bg_color: '#000',
      });
    });
  });
});
