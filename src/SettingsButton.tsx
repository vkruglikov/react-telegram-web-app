import { useContext, useEffect, useId } from 'react';
import { useWebApp, useSmoothButtonsTransition, systemContext } from './core';

export interface SettingsButtonProps {
  onClick?: () => void;
}

const SettingsButton = ({ onClick }: SettingsButtonProps): null => {
  const system = useContext(systemContext);
  const buttonId = useId();
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

  useSmoothButtonsTransition({
    show: WebApp?.SettingsButton?.show,
    hide: WebApp?.SettingsButton?.hide,
    currentShowedIdRef: system.SettingsButton,
    id: buttonId,
  });

  return null;
};

export default SettingsButton;
