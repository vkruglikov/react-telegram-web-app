import { useWebApp } from './core';
import { useMemo } from 'react';

/**
 * A hook that shows version minimum check
 */
export type VersionAtLeastFunction = (version: string | number) => boolean;

/**
 * The hook provided isVersionAtLeast function of the type {@link VersionAtLeastFunction}
 * @group Hooks
 */
export const useVersionAtLeast = (
	version?: string | number | null,
): boolean => {
	const WebApp = useWebApp();

	return useMemo<boolean>(
		() => (version ? Boolean(WebApp?.isVersionAtLeast?.(version)) : false),
		[WebApp, version],
	);
};
