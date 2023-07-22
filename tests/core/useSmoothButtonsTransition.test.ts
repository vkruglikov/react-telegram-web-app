import { useSmoothButtonsTransition } from '../../src/core';
import { act, renderHook } from '@testing-library/react';

describe('useSmoothButtonsTransition', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  it.each([
    [{ smoothButtonsTransition: false, smoothButtonsTransitionMs: undefined }],
    [{ smoothButtonsTransition: true, smoothButtonsTransitionMs: 50 }],
    [{ smoothButtonsTransition: true, smoothButtonsTransitionMs: 100 }],
    [{ smoothButtonsTransition: false, smoothButtonsTransitionMs: 100 }],
    [{ smoothButtonsTransition: undefined, smoothButtonsTransitionMs: 100 }],
  ])(
    'checks correct call show(),hide() with options %p',
    ({ smoothButtonsTransition, smoothButtonsTransitionMs }) => {
      jest.spyOn(require('react'), 'useContext').mockImplementation(() => ({
        smoothButtonsTransition,
        smoothButtonsTransitionMs,
      }));

      const setTimeoutSpy = jest
        .spyOn(global, 'setTimeout')
        .mockImplementation(handler => {
          handler();
          return undefined as unknown as ReturnType<typeof setTimeout>;
        });

      const initialProps = {
        show: jest.fn(),
        hide: jest.fn(),
        currentShowedIdRef: {
          current: null,
        },
        id: 'idButton',
      };

      const { rerender, unmount } = renderHook(useSmoothButtonsTransition, {
        initialProps,
      });
      expect(initialProps.show).toBeCalledTimes(1);
      expect(initialProps.hide).toBeCalledTimes(0);

      expect(initialProps.currentShowedIdRef.current).toBe('idButton');

      act(() => {
        rerender(initialProps);
      });
      expect(initialProps.currentShowedIdRef.current).toBe('idButton');

      act(() => {
        rerender(initialProps);
      });
      unmount();
      expect(initialProps.currentShowedIdRef.current).toBe(null);

      expect(initialProps.show).toBeCalledTimes(1);
      expect(initialProps.hide).toBeCalledTimes(1);

      expect(setTimeoutSpy).toBeCalledTimes(smoothButtonsTransition ? 1 : 0);
      if (smoothButtonsTransition) {
        expect(setTimeoutSpy).toBeCalledWith(
          expect.any(Function),
          smoothButtonsTransitionMs,
        );
      }
    },
  );
});
