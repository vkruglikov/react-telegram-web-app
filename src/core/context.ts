import { createContext } from 'react';
import { WebApp } from './twa-types';

export const DEFAULT_WEBAPP =
  typeof window !== 'undefined' && window?.Telegram?.WebApp
    ? window.Telegram.WebApp
    : null;

export const webAppContext = createContext<WebApp | null>(DEFAULT_WEBAPP);

export type Options = {
  smoothButtonsTransition?: boolean;
  smoothButtonsTransitionMs?: number;
};

export const DEFAULT_OPTIONS: Options = {
  smoothButtonsTransition: false,
  /** @link https://w3c.github.io/requestidlecallback/#why50 */
  smoothButtonsTransitionMs: 50,
};

export const optionsContext = createContext<Options>(DEFAULT_OPTIONS);

type SystemContext = {
  currentMainButtonShow: null | string;
  currentBackButtonShow: null | string;
};

export const DEFAULT_SYSTEM = {
  currentMainButtonShow: null,
  currentBackButtonShow: null,
};
export const systemContext = createContext<SystemContext>(DEFAULT_SYSTEM);
