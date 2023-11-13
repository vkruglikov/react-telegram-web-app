import { systemContext } from './core';
import { useContext, useMemo } from 'react';

/**
 * A hook that shows version minimum check
 */
export type VersionAtLeastFunction = (version: string | number) => boolean;

/**
 * The hook provided isVersionAtLeast function of the type {@link VersionAtLeastFunction}
 * @group Hooks
 */
export const useTwa = (): { isLoading: boolean; isLoaded: boolean } => {
	const system = useContext(systemContext);

	const isLoading = useMemo(() => system.isTwaLoading, [system]);
	const isLoaded = useMemo(() => system.isTwaLoaded, [system]);

	return { isLoading, isLoaded };
};
