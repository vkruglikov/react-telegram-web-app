import { useCallback } from 'react';

/**
 * Then function provided Promise function that read text from clipboard
 * @return {Promise<string>}
 */
export type ReadTextFromClipboardFunction = () => Promise<string>;

/**
 * This hook that provided {@link ReadTextFromClipboardFunction} Promise function that read text from clipboard.
 * You have to look original description readTextFromClipboard in {@link telegram!WebApp}, because hook just implements his.
 * @return {ReadTextFromClipboardFunction}
 * @group Hooks
 */
const readTextFromClipboard = (): ReadTextFromClipboardFunction =>
  useCallback(
    () =>
      new Promise(resolve => {
        window.Telegram.WebApp.readTextFromClipboard(resolve);
      }),
    [],
  );

export default readTextFromClipboard;
