import React, { FC, PropsWithChildren, ReactElement } from 'react';
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
 * @param props
 * @group React Components
 */
const WebAppProvider = ({ children }: WebAppProviderProps): ReactElement => (
  <WebAppContext.Provider value={webAppSdk}>{children}</WebAppContext.Provider>
);
export default WebAppProvider;
