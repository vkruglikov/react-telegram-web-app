import { useEffect } from 'react';
import { useWebApp } from './core';

/**
 * The props type of {@link SettingsButton | `SettingsButton`}.
 */
export interface SettingsButtonProps {
  onClick?: () => void;
}

/**
 * Renders a {@link telegram!SettingsButton} component in React app as {@link react!Component}
 *
 * ```tsx
 * import { SettingsButton } from "@vkruglikov/react-telegram-web-app";
 *
 * <SettingsButton
 *     onClick={() => console.log('Hello, I am settings button!')}
 * />
 * ```
 * @param props
 * @group React Components
 */
const SettingsButton = ({ onClick }: SettingsButtonProps): null => {
  const WebApp = useWebApp();

  useEffect(() => {
    if (!onClick || !WebApp?.SettingsButton) {
      return;
    }

    WebApp.SettingsButton.onClick(onClick);
    return () => {
      WebApp.SettingsButton.offClick(onClick);
    };
  }, [onClick, WebApp]);

  useEffect(() => {
    if (!WebApp?.SettingsButton) {
      return;
    }

    WebApp.SettingsButton.show?.();

    return () => {
      WebApp.SettingsButton.hide?.();
    };
  }, [WebApp]);

  return null;
};

export default SettingsButton;
