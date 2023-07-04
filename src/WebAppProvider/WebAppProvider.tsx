import React, { PropsWithChildren, useMemo } from 'react';
import WebAppContext from './context';

export type WebAppProviderProps = PropsWithChildren;
function WebAppProvider({ children }: WebAppProviderProps) {
  const webAppSdk = useMemo(
    () => (typeof window !== 'undefined' ? window?.Telegram?.WebApp : null),
    [],
  );

  return (
    <WebAppContext.Provider value={webAppSdk}>
      {children}
    </WebAppContext.Provider>
  );
}

export default WebAppProvider;
