import { MutableRefObject, useContext, useEffect } from 'react';
import { optionsContext } from './context';

const _noop = () => {};

const useSmoothButtonsTransition = ({
  id,
  show = _noop,
  hide = _noop,
  currentShowedIdRef,
}: {
  id: string;
  show: typeof _noop | undefined;
  hide: typeof _noop | undefined;
  currentShowedIdRef: MutableRefObject<string | null>;
}) => {
  const { smoothButtonsTransition, smoothButtonsTransitionMs } =
    useContext(optionsContext);

  useEffect(() => {
    show();
    currentShowedIdRef.current = id;

    return () => {
      if (smoothButtonsTransition) {
        currentShowedIdRef.current = null;
        setTimeout(() => {
          if (currentShowedIdRef.current) return;

          hide();
        }, smoothButtonsTransitionMs);
      } else {
        hide();
        currentShowedIdRef.current = null;
      }
    };
  }, [
    hide,
    id,
    currentShowedIdRef,
    show,
    smoothButtonsTransition,
    smoothButtonsTransitionMs,
  ]);
};

export default useSmoothButtonsTransition;
