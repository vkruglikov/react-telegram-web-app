import { act, renderHook } from '@testing-library/react';

import useWebApp from '../src/useWebApp';
import useExpand from '../src/useExpand';

jest.mock('../src/useWebApp');

describe('useExpand', () => {
  const MockedWebApp = useWebApp();

  beforeEach(() => {
    jest.clearAllMocks();
    (useWebApp as jest.Mock).mockImplementation(() => MockedWebApp);
  });

  it.each([
    [true, true],
    [false, false],
    [undefined, undefined],
  ])(
    'checks WebApp.isExpanded = %p hook return isExpanded default value = %p',
    (isExpanded, expectedIsExpanded) => {
      (useWebApp as jest.Mock).mockImplementation(() => ({
        ...MockedWebApp,
        isExpanded,
      }));
      const { result } = renderHook(useExpand);

      act(() => {
        expect(result.current[0]).toBe(expectedIsExpanded);
      });
    },
  );

  /**
   * TODO перенести тест перебинда в тест useWebApp и включить строго react-hooks/exhaustive-deps
   */
  it('checks correct rebind event handler', () => {
    const { rerender, unmount } = renderHook(useExpand);

    act(() => {
      rerender();
    });
    (useWebApp as jest.Mock).mockImplementation(() => ({
      ...MockedWebApp,
    }));

    /**
     * After one rerender, should be called onEvent once
     */
    expect(useWebApp()?.onEvent).toBeCalledTimes(1);
    expect(useWebApp()?.offEvent).toBeCalledTimes(0);
    (useWebApp()?.onEvent as jest.Mock).mockClear();

    act(() => {
      rerender();
    });
    expect(useWebApp()?.offEvent).toBeCalledTimes(1);
    (useWebApp()?.offEvent as jest.Mock).mockClear();

    act(() => {
      unmount();
    });

    expect(useWebApp()?.onEvent).toBeCalledTimes(1);
    expect(useWebApp()?.offEvent).toBeCalledTimes(1);

    expect(useWebApp()?.onEvent).toBeCalledWith(
      'viewportChanged',
      expect.any(Function),
    );
    expect(useWebApp()?.offEvent).toBeCalledWith(
      'viewportChanged',
      expect.any(Function),
    );
  });

  it('checks correct change state isExpanded', () => {
    const IsolateMockedWebApp = { ...MockedWebApp };
    IsolateMockedWebApp.isExpanded = true;
    (useWebApp as jest.Mock).mockImplementation(() => IsolateMockedWebApp);
    const fireEventHandler = (state: boolean) => {
      IsolateMockedWebApp.isExpanded = state;

      act(() => {
        // @ts-ignore
        (useWebApp()?.onEvent as jest.MockedFn<any>).mock.lastCall?.[1]?.({
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
