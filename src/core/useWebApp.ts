import { useContext } from 'react';
import { webAppContext } from './context';

/**
 * @private
 * @ignore
 */
const useWebApp = () => {
  const context = useContext(webAppContext);

  return context;
};

export default useWebApp;
