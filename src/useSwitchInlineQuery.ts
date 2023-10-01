import { useWebApp } from './core';
import { useCallback } from 'react';

/**
 * This function that inserts the bot's username and the specified inline query in the current chat's input field
 * You have to look original description switchInlineQuery in {@link telegram!WebApp} for more information
 */
export type SwitchInlineQueryFunction = (
  query: string,
  chatType?: ('users' | 'bots' | 'groups' | 'channels')[],
) => void;

/**
 * This hook that provided {@link SwitchInlineQueryFunction}
 * You have to look original description switchInlineQuery in {@link telegram!WebApp}, because hook just implements his.
 * @return {SwitchInlineQueryFunction}
 * @group Hooks
 */
const useSwitchInlineQuery = (): SwitchInlineQueryFunction => {
  const WebApp = useWebApp();

  return useCallback(
    (...args) => WebApp?.switchInlineQuery?.(...args),
    [WebApp],
  );
};

export default useSwitchInlineQuery;
