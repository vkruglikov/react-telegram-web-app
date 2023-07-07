import { WebApp } from './src/types';

declare global {
  interface Window {
    Telegram?: {
      WebApp: WebApp;
    };
  }
}
