import { useContext, useEffect } from 'react';
import WebAppContext from './context';

let isShowWarning = false;
/**
 * @private
 * @ignore
 */
const useWebApp = () => {
  const context = useContext(WebAppContext);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' && !context && !isShowWarning) {
      console.error(
        "react-telegram-web-app: Can't find WebApp context\r\n" +
          'You need to wrap your application with <WebAppProvider />',
      );
      isShowWarning = true;
    }
  }, []);

  return context;
};

export default useWebApp;
