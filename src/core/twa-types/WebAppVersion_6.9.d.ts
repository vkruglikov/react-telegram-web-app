import { TelegramWebAppVersion6_7 } from './WebAppVersion_6.7';
import { TelegramWebAppVersion6_2 } from './WebAppVersion_6.2';

export declare namespace TelegramWebAppVersion6_9 {
  interface WebAppUser extends TelegramWebAppVersion6_2.WebAppUser {
    added_to_attachment_menu?: true;
    allows_write_to_pm?: true;
  }

  interface Event {
    onEvent(
      eventType: 'writeAccessRequested',
      eventHandler: (data: { status: 'allowed' | 'cancelled' }) => void,
    );

    onEvent(
      eventType: 'contactRequested',
      eventHandler: (payload: { data: 'sent' | 'cancelled' }) => void,
    );

    offEvent(
      eventType: 'writeAccessRequested' | 'contactRequested',
      eventHandler: (...args: any[]) => void,
    );
  }

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

  interface WebApp extends TelegramWebAppVersion6_7.WebApp, Event {
    CloudStorage: CloudStorage;
  }
}
