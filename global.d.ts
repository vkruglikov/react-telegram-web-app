import { WebApp } from './twa-types';

declare global {
  interface Window {
    Telegram?: {
      WebApp: WebApp;
    };
  }
}
