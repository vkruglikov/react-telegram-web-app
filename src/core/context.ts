import { createContext } from 'react';
import { WebApp } from '../types';

const WebAppContext = createContext<WebApp | null>(null);

export const WebAppOptionsContext = createContext({});

export default WebAppContext;
