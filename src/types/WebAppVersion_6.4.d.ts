import { TelegramWebAppVersion6_2 } from './WebAppVersion_6.2';

export declare namespace TelegramWebAppVersion6_4 {
  /**
   * {@link https://core.telegram.org/bots/webapps#scanqrpopupparams}
   */
  interface ScanQrPopupParams {
    text?: string;
  }

  interface Event {
    onEvent(eventType: 'qrTextReceived', eventHandler: (data: string) => void);

    onEvent(
      eventType: 'clipboardTextReceived',
      eventHandler: (payload: { data: string | null }) => void,
    );

    offEvent(
      eventType: 'qrTextReceived' | 'clipboardTextReceived',
      eventHandler: (...args: any[]) => void,
    );
  }

  interface WebApp extends TelegramWebAppVersion6_2.WebApp, Event {
    openLink(url: string, options?: { try_instant_view: true });

    platform: string;
    showScanQrPopup(
      params: ScanQrPopupParams,
      callback?: (data: string) => void | boolean,
    );
    closeScanQrPopup();
    readTextFromClipboard(callback?: (data: string) => void);
  }
}
