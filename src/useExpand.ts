import { DispatchWithoutAction, useCallback, useEffect, useState } from 'react';
import { useWebApp } from './core';

/**
 * This hook provided isExpanded state, and expand() handle
 * You have to look original description in {@link telegram!WebApp} for more information
 *
 * `isExpanded` can be `undefined`
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
const useExpand = (): readonly [boolean | undefined, DispatchWithoutAction] => {
  const WebApp = useWebApp();
  const [isExpanded, setIsExpanded] = useState(WebApp?.isExpanded);

  useEffect(() => {
    if (!WebApp) return;
    const handleEvent = (payload: { isStateStable: boolean }) => {
      if (payload.isStateStable) {
        setIsExpanded(WebApp.isExpanded);
      }
    };

    WebApp.onEvent('viewportChanged', handleEvent);
    return () => WebApp.offEvent('viewportChanged', handleEvent);
  }, [WebApp]);

  const handleExpand = useCallback(() => WebApp?.expand?.(), [WebApp]);

  return [isExpanded, handleExpand] as const;
};

export default useExpand;
