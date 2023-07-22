import { useCallback } from 'react';
import { useWebApp } from './core';

/**
 * This function provided Promise function that read text from clipboard
 * @return {Promise<string>}
 */
export type ReadTextFromClipboardFunction = () => Promise<string>;

/**
 * This hook that provided {@link ReadTextFromClipboardFunction} Promise function that read text from clipboard.
 * You have to look original description readTextFromClipboard in {@link telegram!WebApp}, because hook just implements his.
 *
 * ```tsx
 * import { useReadTextFromClipboard } from "@vkruglikov/react-telegram-web-app";
 *
 * const readText = useReadTextFromClipboard();
 *
 * readText().then(console.log);
 * // or
 * await readText()
 * ```
 *
 * @return {ReadTextFromClipboardFunction}
 * @group Hooks
 */
const useReadTextFromClipboard = (): ReadTextFromClipboardFunction => {
  const WebApp = useWebApp();

  return useCallback(
    () =>
      new Promise(resolve => {
        WebApp?.readTextFromClipboard?.(resolve);
      }),
    [WebApp],
  );
};

export default useReadTextFromClipboard;
