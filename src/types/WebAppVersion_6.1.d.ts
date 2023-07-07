import { TelegramWebApp } from './WebApp';

export declare namespace TelegramWebAppVersion6_1 {
  interface ThemeParams extends TelegramWebApp.ThemeParams {
    secondary_bg_color?: string;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#backbutton}
   */
  interface BackButton {
    isVisible: boolean;

    onClick(cb: () => void): BackButton;

    offClick(cb: () => void): BackButton;

    show(): BackButton;

    hide(): BackButton;
  }

  interface MainButton extends TelegramWebApp.MainButton {
    offClick(text: () => void): MainButton;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#webappchat}
   */
  interface WebAppChat {
    id: number;
    type: 'group' | 'supergroup' | 'channel';
    title: string;
    username?: string;
    photo_url?: string;
  }

  interface WebAppInitData extends TelegramWebApp.WebAppInitData {
    chat?: WebAppChat;
    can_send_after?: number;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#hapticfeedback}
   */
  interface HapticFeedback {
    impactOccurred(
      style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft',
    ): HapticFeedback;

    notificationOccurred(type: 'error' | 'success' | 'warning'): HapticFeedback;

    selectionChanged(): HapticFeedback;
  }

  interface Event {
    onEvent(
      eventType: 'backButtonClicked' | 'settingsButtonClicked',
      eventHandler: () => void,
    );

    onEvent(
      eventType: 'invoiceClosed',
      eventHandler: (payload: {
        url: string;
        status: 'paid' | 'cancelled' | 'failed' | 'pending';
      }) => void,
    );

    offEvent(
      eventType:
        | 'backButtonClicked'
        | 'settingsButtonClicked'
        | 'invoiceClosed',
      eventHandler: (...args: any[]) => void,
    );
  }

  interface WebApp extends TelegramWebApp.WebApp, Event {
    themeParams: ThemeParams;
    initDataUnsafe: WebAppInitData;
    MainButton: MainButton;
    version: string;
    headerColor: string;
    backgroundColor: string;
    BackButton: BackButton;
    HapticFeedback: HapticFeedback;
    isVersionAtLeast(version: string | number): boolean;
    setHeaderColor(color: 'bg_color' | 'secondary_bg_color' | string);
    setBackgroundColor(color: 'bg_color' | 'secondary_bg_color' | string);
    openLink(url: string);
    openTelegramLink(url: string);
    openInvoice(
      url: string,
      callback?: (status: 'paid' | 'cancelled' | 'failed' | 'pending') => void,
    );
  }
}
