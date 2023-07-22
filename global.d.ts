import { WebApp } from './src/core';

declare global {
  interface Window {
    Telegram?: {
      WebApp: WebApp;
    };
  }
}
