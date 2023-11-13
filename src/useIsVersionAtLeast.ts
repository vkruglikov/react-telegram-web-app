import { useWebApp } from './core';
import { useCallback } from 'react';

/**
 * A hook that shows version minimum check
 */
export type VersionAtLeastFunction = (version: string | number) => boolean;

/**
 * The hook provided isVersionAtLeast function of the type {@link VersionAtLeastFunction}
 * @group Hooks
 */
export const useIsVersionAtLeast = (): VersionAtLeastFunction => {
	const WebApp = useWebApp();

	return useCallback(
		(version: string | number) => WebApp?.isVersionAtLeast?.(version) ?? false,
		[WebApp],
	);
};
