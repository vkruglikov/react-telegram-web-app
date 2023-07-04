import React, { FC, PropsWithChildren } from 'react';
import WebAppContext from './context';

export type WebAppProviderProps = PropsWithChildren;

const webAppSdk =
  typeof window !== 'undefined' ? window?.Telegram?.WebApp : null;

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
 * @group React Components
 */
const WebAppProvider: FC<WebAppProviderProps> = ({ children }) => (
  <WebAppContext.Provider value={webAppSdk}>{children}</WebAppContext.Provider>
);
export default WebAppProvider;
