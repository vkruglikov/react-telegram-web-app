import { useContext } from 'react';
import WebAppContext from './context';

const useWebApp = () => useContext(WebAppContext);

export default useWebApp;
