import { useContext } from 'react';
import WebAppContext from './context';

/**
 * @private
 * @ignore
 */
const useWebApp = () => useContext(WebAppContext);

export default useWebApp;
