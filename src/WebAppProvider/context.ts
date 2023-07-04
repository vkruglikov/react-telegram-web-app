import { createContext } from 'react';

const WebAppContext = createContext<typeof window.Telegram.WebApp | null>(null);

export default WebAppContext;
