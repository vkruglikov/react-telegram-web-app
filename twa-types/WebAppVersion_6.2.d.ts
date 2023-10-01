import { TelegramWebAppVersion6_1 } from './WebAppVersion_6.1';
import { TelegramWebApp } from './WebApp';

export declare namespace TelegramWebAppVersion6_2 {
  /**
   * {@link https://core.telegram.org/bots/webapps#webappuser}
   */
  interface WebAppUser extends TelegramWebApp.WebAppUser {
    is_premium?: true;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#webappinitdata}
   */
  interface WebAppInitData extends TelegramWebAppVersion6_1.WebAppInitData {
    user?: WebAppUser;
    receiver?: WebAppUser;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#popupbutton}
   */
  interface PopupButton {
    id?: string;
    type?: string;
    text?: string;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#popupparams}
   */
  interface PopupParams {
    title?: string;
    message: string;
    buttons?: PopupButton[];
  }

  interface Event {
    onEvent(
      eventType: 'popupClosed',
      eventHandler: (payload: { button_id: string }) => void,
    );

    offEvent(eventType: 'popupClosed', eventHandler: (...args: any[]) => void);
  }

  interface WebApp extends TelegramWebAppVersion6_1.WebApp, Event {
    initDataUnsafe: WebAppInitData;
    isClosingConfirmationEnabled: string;
    enableClosingConfirmation();
    disableClosingConfirmation();
    showPopup(params: PopupParams, callback?: (id: string) => void);
    showAlert(message: string, callback?: () => void);
    showConfirm(message: string, callback?: (isOk: boolean) => void);
  }
}
