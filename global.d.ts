import { WebApp } from './src/core/twa-types';

declare global {
  interface Window {
    Telegram?: {
      WebApp: WebApp;
    };
    TelegramWebviewProxy?: any;
  }
}
