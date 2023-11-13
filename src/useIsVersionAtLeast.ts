import { useWebApp } from './core';
import { useCallback, useMemo } from 'react';

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

	const _isVersionAtLeast = useMemo(() => {
		return WebApp?.isVersionAtLeast;
	}, [WebApp]);

	return useCallback(
		(version: string | number) => _isVersionAtLeast?.(version) ?? false,
		[_isVersionAtLeast],
	);
};
