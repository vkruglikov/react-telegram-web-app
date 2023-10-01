import { act, renderHook } from '@testing-library/react';

import { useWebApp } from '../src/core';
import { WebApp } from '../src/core/twa-types';
import useExpand from '../src/useExpand';

describe('useExpand', () => {
  it.each([
    [true, true],
    [false, false],
    [undefined, undefined],
  ])(
    'checks WebApp.isExpanded = %p hook return isExpanded default value = %p',
    (isExpanded, expectedIsExpanded) => {
      jest.replaceProperty(
        useWebApp() as WebApp,
        'isExpanded',
        isExpanded as boolean,
      );

      const { result } = renderHook(useExpand);

      act(() => {
        expect(result.current[0]).toBe(expectedIsExpanded);
      });
    },
  );

  /**
   * TODO перенести тест перебинда в тест useWebApp
   */
  it('checks correct rebind event handler', () => {
    const { rerender, unmount } = renderHook(useExpand);

    act(() => {
      rerender();
    });

    /**
     * After one rerender, should be called onEvent once
     */
    expect(useWebApp()?.onEvent).toBeCalledTimes(1);
    expect(useWebApp()?.offEvent).toBeCalledTimes(0);
    expect(useWebApp()?.onEvent).toBeCalledWith(
      'viewportChanged',
      expect.any(Function),
    );

    (useWebApp()?.onEvent as jest.Mock).mockClear();

    act(() => {
      rerender();
    });
    expect(useWebApp()?.onEvent).toBeCalledTimes(0);
    expect(useWebApp()?.offEvent).toBeCalledTimes(0);
    (useWebApp()?.offEvent as jest.Mock).mockClear();

    act(() => {
      unmount();
    });

    expect(useWebApp()?.onEvent).toBeCalledTimes(0);
    expect(useWebApp()?.offEvent).toBeCalledTimes(1);

    expect(useWebApp()?.offEvent).toBeCalledWith(
      'viewportChanged',
      expect.any(Function),
    );
  });

  it('checks correct change state isExpanded', () => {
    jest.replaceProperty(useWebApp() as WebApp, 'isExpanded', true);
    const fireEventHandler = (state: boolean) => {
      jest.replaceProperty(useWebApp() as WebApp, 'isExpanded', state);

      act(() => {
        (useWebApp()?.onEvent as jest.Mock).mock.lastCall?.[1]?.({
          isStateStable: true,
        });
        rerender();
      });
    };

    const { result, rerender } = renderHook(useExpand);

    act(() => {
      expect(result.current[0]).toBe(true);
    });

    fireEventHandler(false);
    expect(result.current[0]).toBe(false);

    fireEventHandler(true);
    expect(result.current[0]).toBe(true);
  });

  it('checks correct call WebApp.expand() from hook', () => {
    const { result } = renderHook(useExpand);

    act(() => {
      result.current[1]();
    });

    expect(useWebApp()?.expand as jest.Mock).toBeCalledTimes(1);
  });
});
