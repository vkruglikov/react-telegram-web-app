import { act, renderHook } from '@testing-library/react';
import useHapticFeedback from '../src/useHapticFeedback';
import { useWebApp } from '../src/core';

describe('useHapticFeedback', () => {
  it('checks correct call WebApp.HapticFeedback api', () => {
    const { result } = renderHook(useHapticFeedback);
    const [impactOccurred, notificationOccurred, selectionChanged] =
      result.current;

    act(() => {
      impactOccurred('soft');
      notificationOccurred('warning');
      selectionChanged();
    });

    expect(useWebApp()?.HapticFeedback?.impactOccurred).toBeCalledTimes(1);
    expect(useWebApp()?.HapticFeedback?.impactOccurred).toBeCalledWith('soft');

    expect(useWebApp()?.HapticFeedback?.notificationOccurred).toBeCalledTimes(
      1,
    );
    expect(useWebApp()?.HapticFeedback?.notificationOccurred).toBeCalledWith(
      'warning',
    );

    expect(useWebApp()?.HapticFeedback?.selectionChanged).toBeCalledTimes(1);
    expect(useWebApp()?.HapticFeedback?.selectionChanged).toBeCalledWith();
  });
});
