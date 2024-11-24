import React, {
  PropsWithChildren,
  ReactElement,
  useEffect,
  useMemo,
} from 'react';
import {
  webAppContext,
  optionsContext,
  systemContext,
  Options,
  DEFAULT_OPTIONS,
  createSystemContextValue,
  getWebAppFromGlobal,
  useAsyncMode,
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
  const isLoadedWithAsyncMode = useAsyncMode(!!options?.async);
  const mergedOptions = useMemo(
    () => ({
      ...DEFAULT_OPTIONS,
      ...options,
    }),
    [options],
  );
  const systemValue = useMemo(createSystemContextValue, []);
  const globalWebApp = useMemo(getWebAppFromGlobal, [isLoadedWithAsyncMode]);

  useEffect(() => {
    if (!options?.smoothButtonsTransition) return;
    const forceHideButtons = () => {
      globalWebApp?.MainButton?.hide();
      globalWebApp?.BackButton?.hide();
      globalWebApp?.SettingsButton?.hide();
    };

    window.addEventListener('beforeunload', forceHideButtons);
    return () => window.removeEventListener('beforeunload', forceHideButtons);
  }, [globalWebApp, options?.smoothButtonsTransition]);

  return (
    <systemContext.Provider value={systemValue}>
      <webAppContext.Provider value={globalWebApp}>
        <optionsContext.Provider value={mergedOptions}>
          {children}
        </optionsContext.Provider>
      </webAppContext.Provider>
    </systemContext.Provider>
  );
};
export default WebAppProvider;
