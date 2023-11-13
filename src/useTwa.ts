import { systemContext } from './core';
import { useContext } from 'react';

/**
 * A hook that shows version minimum check
 */
export type VersionAtLeastFunction = (version: string | number) => boolean;

/**
 * The hook provided isVersionAtLeast function of the type {@link VersionAtLeastFunction}
 * @group Hooks
 */
export const useTwa = (): { isLoading: boolean; isLoaded: boolean } => {
	const { isTwaLoaded, isTwaLoading } = useContext(systemContext);

	return { isLoading: isTwaLoading, isLoaded: isTwaLoaded };
};
