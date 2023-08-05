import { useContext, useEffect, useId } from 'react';
import { useWebApp, useSmoothButtonsTransition, systemContext } from './core';

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
   * Just an alias on the {@link MainButtonProps.disabled}
   * @deprecated Use {@link MainButtonProps.disabled} instead, will be removed
   * @ignore
   */
  disable?: boolean;
  /**
   * The button disable state.
   * @defaultValue Set to `false` y defaults
   */
  disabled?: boolean;
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
 * @param props
 * @group React Components
 */
const MainButton = ({
  text = 'CONTINUE',
  progress = false,
  disable: disable_old,
  disabled: disable_new = false,
  color,
  textColor,
  onClick,
}: MainButtonProps): null => {
  const system = useContext(systemContext);
  const buttonId = useId();
  const WebApp = useWebApp();
  const MainButton = WebApp?.MainButton;
  const themeParams = WebApp?.themeParams;
  const disabled = disable_old || disable_new;

  useEffect(() => {
    MainButton?.setParams({
      color: color || themeParams?.button_color || '#fff',
    });
  }, [color, themeParams, MainButton]);

  useEffect(() => {
    MainButton?.setParams({
      text_color: textColor || themeParams?.button_text_color || '#000',
    });
  }, [MainButton, themeParams, textColor]);

  useEffect(() => {
    MainButton?.setText(text);
  }, [text, MainButton]);

  useEffect(() => {
    if (disabled) {
      MainButton?.disable();
    } else if (!disabled) {
      MainButton?.enable();
    }
  }, [disabled, MainButton]);

  useEffect(() => {
    if (progress) {
      MainButton?.showProgress(false);
    } else if (!progress) {
      MainButton?.hideProgress();
    }
  }, [progress, MainButton]);

  useEffect(() => {
    if (!onClick) {
      return;
    }

    MainButton?.onClick(onClick);
    return () => {
      MainButton?.offClick(onClick);
    };
  }, [onClick, MainButton]);

  useSmoothButtonsTransition({
    show: MainButton?.show,
    hide: MainButton?.hide,
    currentShowedIdRef: system.MainButton,
    id: buttonId,
  });

  return null;
};

export default MainButton;
