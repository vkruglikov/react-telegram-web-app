import { DispatchWithoutAction, useEffect, useState } from 'react';

const getIsExpanded = () => window.Telegram.WebApp.isExpanded;
const expand: DispatchWithoutAction = () => window.Telegram.WebApp.expand();

/**
 * This hook provided isExpanded state, and expand() handle
 * You have to look original description in {@link telegram!WebApp} for more information*
 *
 * ```tsx
 * import { useExpand } from "@vkruglikov/react-telegram-web-app";
 *
 * const [isExpanded, expand] = useExpand();
 * const handleClick = () => !isExpanded && expand();
 *
 * <button onClick={handleClick}>
 *     {showTextWhenScreenExpanded && 'expanded' : 'to expand'}
 * </button>
 * ```
 *
 * @privateRemarks
 * Api doesn't provide event for listening isExpanded, so we use
 * viewportChanged, but it is an unsafe way
 *
 * @group Hooks
 */
const useExpand = (): readonly [boolean, DispatchWithoutAction] => {
  const [isExpanded, setIsExpanded] = useState(getIsExpanded);

  useEffect(() => {
    const handleEvent = (payload: { isStateStable: boolean }) => {
      if (payload.isStateStable) {
        setIsExpanded(getIsExpanded());
      }
    };

    window.Telegram.WebApp.onEvent('viewportChanged', handleEvent);
    return () =>
      window.Telegram.WebApp.offEvent('viewportChanged', handleEvent);
  }, []);

  return [isExpanded, expand] as const;
};

export default useExpand;
