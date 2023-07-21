import React, { PropsWithChildren, ReactElement } from 'react';
import WebAppContext, { WebAppOptionsContext } from './core/context';

export type WebAppProviderProps = PropsWithChildren;

const webAppSdk =
  typeof window !== 'undefined' && window?.Telegram?.WebApp
    ? window.Telegram.WebApp
    : null;

/**
 * WebAppProvider provide context with WebApp for components and hooks
 *
 * ```tsx
 * import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";
 *
 * <WebAppProvider>
 *   <YourAppComponent />
 * </WebAppProvider>
 * ```
 * @param props
 * @group React Components
 */
const WebAppProvider = ({ children }: WebAppProviderProps): ReactElement => (
  <WebAppOptionsContext.Provider value={''}>
    <WebAppContext.Provider value={webAppSdk}>
      {children}
    </WebAppContext.Provider>
  </WebAppOptionsContext.Provider>
);
export default WebAppProvider;
