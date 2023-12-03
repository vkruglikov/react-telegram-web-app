import React, {
  PropsWithChildren,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  webAppContext,
  optionsContext,
  systemContext,
  Options,
  DEFAULT_OPTIONS,
  DEFAULT_WEBAPP,
  createSystemContextValue,
} from './core';

export type WebAppProviderProps = PropsWithChildren<{
  options?: Options;
}>;

/**
 * WebAppProvider provide context with WebApp for components and hooks.
 * Necessary to use only if you want to override `options`
 *
 * ```tsx
 * import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";
 *
 * <WebAppProvider>
 *   <YourAppComponent />
 * </WebAppProvider>
 *
 * // You can pass options {@link Options}
 * <WebAppProvider
 *   options={{
 *     smoothButtonsTransition: true
 *   }}
 * >
 *   <YourAppComponent />
 * </WebAppProvider>
 * ```
 * @param props
 * @group React Components
 */
const WebAppProvider = ({
  children,
  options,
}: WebAppProviderProps): ReactElement => {
  const mergedOptions = useMemo(
    () => ({
      ...DEFAULT_OPTIONS,
      ...options,
    }),
    [options],
  );
  const systemValue = useMemo(createSystemContextValue, []);

  const [webApp, setWebApp] = useState(DEFAULT_WEBAPP);

  useEffect(() => {
    let retries = 0;
    const timer = setInterval(() => {
      retries += 1;
      if (window?.Telegram?.WebApp) {
        clearInterval(timer);
        setWebApp(window.Telegram.WebApp);
      }
      if (retries > 4) clearInterval(timer);
    }, 1000);

    if (!options?.smoothButtonsTransition) return;
    const forceHideButtons = () => {
      DEFAULT_WEBAPP?.MainButton?.hide();
      DEFAULT_WEBAPP?.BackButton?.hide();
    };

    window.addEventListener('beforeunload', forceHideButtons);
    return () => {
      window.removeEventListener('beforeunload', forceHideButtons)
      clearInterval(timer);
    };
  }, [options?.smoothButtonsTransition]);

  return (
    <systemContext.Provider value={systemValue}>
      <webAppContext.Provider value={webApp}>
        <optionsContext.Provider value={mergedOptions}>
          {children}
        </optionsContext.Provider>
      </webAppContext.Provider>
    </systemContext.Provider>
  );
};
export default WebAppProvider;
