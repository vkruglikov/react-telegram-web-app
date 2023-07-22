import { renderHook } from '@testing-library/react';
import useScanQrPopup from '../src/useScanQrPopup';
import { useWebApp } from '../src/core';

describe('useScanQrPopup', () => {
  it('checks correct call WebApp.showScanQrPopup api', () => {
    const { result } = renderHook(useScanQrPopup);
    const [show] = result.current;

    show({
      text: 'Text under QR',
    });

    expect(useWebApp()?.showScanQrPopup).toBeCalledTimes(1);
    expect(useWebApp()?.showScanQrPopup).toBeCalledWith({
      text: 'Text under QR',
    });
  });

  it('checks correct call WebApp.closeScanQrPopup api', () => {
    const { result } = renderHook(useScanQrPopup);
    const [_, close] = result.current;

    close();

    expect(useWebApp()?.closeScanQrPopup).toBeCalledTimes(1);
    expect(useWebApp()?.closeScanQrPopup).toBeCalledWith();
  });
});
