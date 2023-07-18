import { useEffect } from 'react';
import useWebApp from './useWebApp';

/**
 * The props type of {@link BackButton | `BackButton`}.
 */
export interface BackButtonProps {
  /** The back button press event handler */
  onClick?: () => void;
}

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
  const WebApp = useWebApp();
  const BackButton = WebApp?.BackButton;

  useEffect(() => {
    BackButton?.show();
    return () => {
      BackButton?.hide();
    };
  }, [BackButton]);

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
