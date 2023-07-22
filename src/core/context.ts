import { createContext, MutableRefObject } from 'react';
import { WebApp } from './twa-types';

export const DEFAULT_WEBAPP =
  typeof window !== 'undefined' && window?.Telegram?.WebApp
    ? window.Telegram.WebApp
    : null;

export const webAppContext = createContext<WebApp | null>(DEFAULT_WEBAPP);

/**
 * This object describe options be able to set through WebAppProvider
 */
export type Options = {
  /**
   * When is `true`, we can smooth button transitions due to show(), hide() calls.
   * So when you use MainButton or BackButton on multiple pages, there will be
   * no noticeable flickering of the button during transitions
   * @defaultValue `false`
   */
  smoothButtonsTransition?: boolean;
  /**
   * @defaultValue `50` Why 50? https://w3c.github.io/requestidlecallback/#why50
   * @remarks
   */
  smoothButtonsTransitionMs?: number;
};

export const DEFAULT_OPTIONS: Options = {
  smoothButtonsTransition: false,
  smoothButtonsTransitionMs: 50,
};

export const optionsContext = createContext<Options>(DEFAULT_OPTIONS);

type SystemContext = {
  MainButton: MutableRefObject<null | string>;
  BackButton: MutableRefObject<null | string>;
};

export const createSystemContextValue = () => ({
  MainButton: { current: null },
  BackButton: { current: null },
});

export const systemContext = createContext<SystemContext>(
  createSystemContextValue(),
);
