import { MutableRefObject, useEffect, useId } from 'react';
import { useWebApp, useSmoothButtonsTransition } from './core';

/**
 * The props type of {@link BackButton | `BackButton`}.
 */
export interface BackButtonProps {
  /** The back button press event handler */
  onClick?: () => void;
}

const isShowBackButtonRef: MutableRefObject<null | string> = {
  current: null,
};

/**
 * Renders a {@link telegram!BackButton} component in React app as {@link react!Component}
 *
 * ```tsx
 * import { BackButton } from "@vkruglikov/react-telegram-web-app";
 *
 * <BackButton
 *     onClick={() => console.log('Hello, I am back button!')}
 * />
 * ```
 * @param props
 * @group React Components
 */
const BackButton = ({ onClick }: BackButtonProps): null => {
  const buttonId = useId();
  const WebApp = useWebApp();
  const BackButton = WebApp?.BackButton;

  useSmoothButtonsTransition({
    show: BackButton?.show,
    hide: BackButton?.hide,
    currentShowedIdRef: isShowBackButtonRef,
    id: buttonId,
  });

  useEffect(() => {
    if (!onClick || !BackButton) {
      return;
    }

    BackButton.onClick(onClick);
    return () => {
      BackButton.offClick(onClick);
    };
  }, [onClick, BackButton]);

  return null;
};

export default BackButton;
