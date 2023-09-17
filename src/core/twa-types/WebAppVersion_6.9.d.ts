import { TelegramWebAppVersion6_7 } from './WebAppVersion_6.7';

export declare namespace TelegramWebAppVersion6_9 {
  type StorageKey = string;
  type CloudStorageCallback<T> =
    | ((error: Error) => void)
    | ((error: null, result: T) => void);

  /**
   * {@link https://core.telegram.org/bots/webapps#cloudstorage}
   */
  interface CloudStorage {
    setItem(
      key: StorageKey,
      value: string,
      callback?: CloudStorageCallback<boolean>,
    ): void;
    getItem(key: StorageKey, callback: CloudStorageCallback<string>): void;
    getItems(
      keys: StorageKey[],
      callback: CloudStorageCallback<string[]>,
    ): void;
    removeItem(key: StorageKey, callback?: CloudStorageCallback<boolean>): void;
    removeItems(
      keys: StorageKey[],
      callback?: CloudStorageCallback<boolean>,
    ): void;
    getKeys(callback: CloudStorageCallback<string[]>): void;
  }

  interface WebApp extends TelegramWebAppVersion6_7.WebApp {
    CloudStorage: CloudStorage;
  }
}
