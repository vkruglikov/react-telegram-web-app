import { FC, useEffect } from 'react';

/**
 * The props type of {@link MainButton | `MainButton`}.
 */
export interface MainButtonProps {
  /**
   * Current button text
   * @defaultValue Set to `CONTINUE` by default
   */
  text?: string;
  /**
   * The button progress state indicator.
   * @defaultValue  Set to `false` by default
   */
  progress?: boolean;
  /**
   * The button disable state.
   * @defaultValue Set to `false` y defaults
   */
  disable?: boolean;
  /** The button press event handler */
  onClick?: () => void;
  /**
   * Current button color.
   * @defaultValue Set to themeParams.button_color by default
   */
  color?: string;
  /**
   * Current button text color
   * @defaultValue Set to themeParams.button_text_color by default
   */
  textColor?: string;
}

/**
 * Renders a {@link telegram!MainButton} component in React app as {@link react!Component}
 *
 * ```tsx
 * import { MainButton } from "@vkruglikov/react-telegram-web-app";
 *
 * <MainButton
 *     text="CLICK ME"
 *     onClick={() => console.log('Hello, I am button!')}
 * />
 * ```
 * @returns Component always returns `null`. Not renders any elements
 * @group React Components
 */
const MainButton: FC<MainButtonProps> = ({
  text = 'CONTINUE',
  progress = false,
  disable = false,
  color,
  textColor,
  onClick,
}): null => {
  const WebApp = typeof window !== 'undefined' ? window.Telegram.WebApp : null;
  const WebAppMainButton = WebApp?.MainButton;

  if (!WebAppMainButton || !WebApp) return null;

  useEffect(() => {
    WebAppMainButton.setParams({
      color: color || WebApp.themeParams.button_color || '#fff',
    });
  }, [color]);

  useEffect(() => {
    WebAppMainButton.setParams({
      text_color: textColor || WebApp.themeParams.button_text_color || '#000',
    });
  }, [textColor]);

  useEffect(() => {
    WebAppMainButton.setText(text);
  }, [text]);

  useEffect(() => {
    if (WebAppMainButton.isActive && disable) {
      WebAppMainButton.disable();
    } else if (!WebAppMainButton.isActive && !disable) {
      WebAppMainButton.enable();
    }
  }, [disable]);

  useEffect(() => {
    if (!WebAppMainButton.isProgressVisible && progress) {
      WebAppMainButton.showProgress(false);
    } else if (WebAppMainButton.isProgressVisible && !progress) {
      WebAppMainButton.hideProgress();
    }
  }, [progress]);

  useEffect(() => {
    if (!onClick) {
      return;
    }

    WebAppMainButton.onClick(onClick);
    return () => {
      WebAppMainButton.offClick(onClick);
    };
  }, [onClick]);

  useEffect(() => {
    WebAppMainButton.show();
    return () => {
      WebAppMainButton.hide();
    };
  }, []);

  return null;
};

export default MainButton;
