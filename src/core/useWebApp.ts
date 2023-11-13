import { useContext } from 'react';
import { webAppContext } from './context';

/**
 * @private
 * @ignore
 */
const useWebApp = () => {
	return useContext(webAppContext);
};

export default useWebApp;
