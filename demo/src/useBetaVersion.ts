import {
  useHapticFeedback,
  useShowPopup,
} from '@vkruglikov/react-telegram-web-app';
import { useRef, useState } from 'react';

const useBetaVersion = (initialState = false) => {
  const showPopup = useShowPopup();
  const [, notification] = useHapticFeedback();

  const [isBeta, setIsBeta] = useState(
    initialState || process.env.NODE_ENV === 'development',
  );
  const isDevModeCounter = useRef(0);
  const handleRequestBeta = () => {
    if (++isDevModeCounter.current >= 10) {
      setIsBeta(!isBeta);
      isDevModeCounter.current = 0;

      showPopup({ message: `isDevMode: ${!isBeta}` });
      notification('success');
    }

    if (isDevModeCounter.current > 7) {
      showPopup({
        message: `${10 - isDevModeCounter.current}`,
      });
    }
  };

  return [isBeta, handleRequestBeta] as const;
};

export default useBetaVersion;
