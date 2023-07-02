import { useEffect, useState } from 'react';

const getIsExpanded = () => window.Telegram.WebApp.isExpanded;
const expand = () => window.Telegram.WebApp.expand();

/**
 * @privateRemarks
 * Api doesn't provide event for listening isExpanded, so we use
 * viewportChanged, but it is an unsafe way
 *
 * @hidden
 * @group Hooks
 */
const useExpand = (): readonly [boolean, () => void] => {
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
