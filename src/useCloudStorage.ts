import { useWebApp } from './core';
import { useCallback, useMemo } from 'react';

/**
 * This function provides `getItem` method from {@link telegram!CloudStorage} as Promise
 * @throws
 */
export type GetItemFunction = (key: string) => Promise<string>;

/**
 * This function provides `setItem` method from {@link telegram!CloudStorage} as Promise
 * @throws
 */
export type SetItemFunction = (key: string, value: string) => Promise<void>;

/**
 * This function provides `getItems` method from {@link telegram!CloudStorage} as Promise
 * @throws
 */
export type GetItemsFunction = (keys: string[]) => Promise<string[]>;

/**
 * This function provides `removeItem` method from {@link telegram!CloudStorage} as Promise
 * @throws
 */
export type RemoveItemFunction = (key: string) => Promise<void>;

/**
 * This function provides `removeItems` method from {@link telegram!CloudStorage} as Promise
 * @throws
 */
export type RemoveItemsFunction = (key: string[]) => Promise<void>;

/**
 * This function provides `getKeys` method from {@link telegram!CloudStorage} as Promise
 * @throws
 */
export type GetKeysFunction = () => Promise<string[]>;

/**
 * This hook provides {@link telegram!CloudStorage} object with promises functions,
 * so you don't have to pass `callback` argument
 * You have to look original description CloudStorage object in {@link telegram!CloudStorage}
 * @group Hooks
 */
const useCloudStorage = (): {
	getItem: GetItemFunction;
	setItem: SetItemFunction;
	getItems: GetItemsFunction;
	removeItem: RemoveItemFunction;
	getKeys: GetKeysFunction;
} => {
	const webApp = useWebApp();
	const cloudStorage = useMemo(() => webApp?.CloudStorage, [webApp]);

	const getItem: GetItemFunction = useCallback(
		key =>
			new Promise((resolve, reject) => {
				if (cloudStorage) {
					return cloudStorage.getItem(key, (error, value) => {
						if (!error) {
							resolve(value);
						} else {
							reject(error);
						}
					});
				}

				reject('No CloudStorage. Perhaps, TWA not supported');
			}),
		[cloudStorage],
	);

	const setItem: SetItemFunction = useCallback(
		(key, value) =>
			new Promise((resolve, reject) => {
				if (cloudStorage) {
					return cloudStorage?.setItem(key, value, (error, state) => {
						if (!error && state) {
							resolve();
						} else {
							reject(error);
						}
					});
				}

				reject('No CloudStorage. Perhaps, TWA not supported');
			}),
		[cloudStorage],
	);

	const getItems: GetItemsFunction = useCallback(
		key =>
			new Promise((resolve, reject) => {
				if (cloudStorage) {
					return cloudStorage.getItems(key, (error, value) => {
						if (!error && value) {
							resolve(value);
						} else {
							reject(error);
						}
					});
				}

				reject('No CloudStorage. Perhaps, TWA not supported');
			}),
		[cloudStorage],
	);

	const removeItem: RemoveItemFunction = useCallback(
		key =>
			new Promise((resolve, reject) => {
				if (cloudStorage) {
					return cloudStorage.removeItem(key, (error, state) => {
						if (!error && state) {
							resolve();
						} else {
							reject(error);
						}
					});
				}

				reject('No CloudStorage. Perhaps, TWA not supported');
			}),
		[cloudStorage],
	);

	const removeItems: RemoveItemsFunction = useCallback(
		key =>
			new Promise((resolve, reject) => {
				if (cloudStorage) {
					return cloudStorage.removeItems(key, (error, state) => {
						if (!error && state) {
							resolve();
						} else {
							reject(error);
						}
					});
				}

				reject('No CloudStorage. Perhaps, TWA not supported');
			}),
		[cloudStorage],
	);

	const getKeys: GetKeysFunction = useCallback(
		() =>
			new Promise((resolve, reject) => {
				if (cloudStorage) {
					return cloudStorage.getKeys((error, state) => {
						if (!error && state) {
							resolve(state);
						} else {
							reject(error);
						}
					});
				}

				reject('No CloudStorage. Perhaps, TWA not supported');
			}),
		[cloudStorage],
	);

	return useMemo(
		() => ({
			getItem,
			setItem,
			getItems,
			removeItem,
			removeItems,
			getKeys,
		}),
		// Осознанно в зависимостях только cloudStorage
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[cloudStorage],
	);
};

export default useCloudStorage;
