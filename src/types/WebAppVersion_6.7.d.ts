import { TelegramWebAppVersion6_4 } from './WebAppVersion_6.4';

export declare namespace TelegramWebAppVersion6_7 {
  interface WebApp extends TelegramWebAppVersion6_4.WebApp {
    switchInlineQuery(query: string, choose_chat_types?: unknown);
  }
}
