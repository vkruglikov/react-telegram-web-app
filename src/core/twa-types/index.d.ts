import { TelegramWebApp } from './WebApp';
import { TelegramWebAppVersion6_1 } from './WebAppVersion_6.1';
import { TelegramWebAppVersion6_2 } from './WebAppVersion_6.2';
import { TelegramWebAppVersion6_4 } from './WebAppVersion_6.4';
import { TelegramWebAppVersion6_7 } from './WebAppVersion_6.7';
import { TelegramWebAppVersion6_9 } from './WebAppVersion_6.9';

export type WebApp = TelegramWebApp.WebApp &
  Partial<TelegramWebAppVersion6_1.WebApp> &
  Partial<TelegramWebAppVersion6_2.WebApp> &
  Partial<TelegramWebAppVersion6_4.WebApp> &
  Partial<TelegramWebAppVersion6_7.WebApp> &
  Partial<TelegramWebAppVersion6_9.WebApp>;
