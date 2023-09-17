import { useCallback } from 'react';
import { useWebApp } from './core';

/**
 * You have to see original interface {@link telegram!PopupButton}.
 */
export interface ShowPopupButton extends Record<string, unknown> {
  /**
   * Optional. Identifier of the button, 0-64 characters.
   * Set to empty string by default.
   * If the button is pressed, its id is returned in the callback and the popupClosed event.
   */
  id?: string;
  /**
   * Optional. Type of the button.
   * Set to default by default.
   */
  type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive' | string;
  /**
   * Optional. The text to be displayed on the button, 0-64 characters.
   * Required if type is default or destructive.
   * Irrelevant for other types.
   */
  text?: string;
}

/**
 * You have to see original interface {@link telegram!PopupParams}.
 */
export interface ShowPopupParams extends Record<string, unknown> {
  /**
   * Optional. The text to be displayed in the popup title, 0-64 characters.
   */
  title?: string;
  /**
   * The message to be displayed in the body of the popup, 1-256 characters.
   */
  message: string;
  /**
   * Optional. List of buttons to be displayed in the popup, 1-3 buttons
   */
  buttons?: ShowPopupButton[];
}

/**
 * This function provides Promise, and resolve the field id of the pressed button will be passed.
 * @return Button id as string, it was described by {@link ShowPopupButton}
 * @throws
 */
export type ShowPopupFunction = (params: ShowPopupParams) => Promise<string>;

/**
 * The hook provided showPopup function of the type {@link ShowPopupFunction}.
 * The function that shows a native popup described by the params argument of the type {@link ShowPopupParams}.
 *
 * ```tsx
 * import { useShowPopup } from "@vkruglikov/react-telegram-web-app";
 *
 * const showPopup = useShowPopup();
 *
 * showPopup({ message: 'Hello world' }).then((buttonId) => console.log(buttonId));
 * ```
 *
 * @group Hooks
 */
const useShowPopup: () => ShowPopupFunction = () => {
  const WebApp = useWebApp();

  return useCallback(
    params =>
      new Promise((resolve, reject) => {
        try {
          WebApp?.showPopup?.(params, (buttonId: string) => {
            resolve(buttonId);
          });
        } catch (e) {
          reject(e);
        }
      }),
    [WebApp],
  );
};

export default useShowPopup;
