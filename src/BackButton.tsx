import { FC, useEffect } from 'react';

/**
 * The props type of {@link BackButton | `BackButton`}.
 */
export interface BackButtonProps {
  /** The back button press event handler */
  onClick: () => void;
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
 * @returns Component always returns `null`. Not renders any elements
 * @group React Components
 */
const BackButton: FC<BackButtonProps> = ({ onClick }) => {
  const WebAppBackButton =
    typeof window !== 'undefined' ? window?.Telegram?.WebApp?.BackButton : null;
  if (!WebAppBackButton) return null;

  useEffect(() => {
    WebAppBackButton.show();
    return () => {
      WebAppBackButton.hide();
    };
  }, []);

  useEffect(() => {
    if (!onClick) {
      return;
    }

    WebAppBackButton.onClick(onClick);
    return () => {
      WebAppBackButton.offClick(onClick);
    };
  }, [onClick]);

  return null;
};

export default BackButton;
