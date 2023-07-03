import { useCallback } from 'react';

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
const useReadTextFromClipboard = (): ReadTextFromClipboardFunction =>
  useCallback(
    () =>
      new Promise(resolve => {
        window.Telegram.WebApp.readTextFromClipboard(resolve);
      }),
    [],
  );

export default useReadTextFromClipboard;
