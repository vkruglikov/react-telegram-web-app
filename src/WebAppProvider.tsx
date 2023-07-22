import React, { PropsWithChildren, ReactElement, useMemo } from 'react';
import {
  webAppContext,
  optionsContext,
  systemContext,
  Options,
  DEFAULT_OPTIONS,
  DEFAULT_WEBAPP,
  DEFAULT_SYSTEM,
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

  return (
    <systemContext.Provider value={DEFAULT_SYSTEM}>
      <webAppContext.Provider value={DEFAULT_WEBAPP}>
        <optionsContext.Provider value={mergedOptions}>
          {children}
        </optionsContext.Provider>
      </webAppContext.Provider>
    </systemContext.Provider>
  );
};
export default WebAppProvider;
