import React, { useEffect } from 'react';

import { useTwa } from './useTwa';
import { useVersionAtLeast } from './useVersionAtLeast';

/**
 * The props type of {@link TwaLoaderProps}.
 */
export interface TwaLoaderProps {
	/**
	 * React Element will be shown in case if Telegram Web Application was successfully loaded and ready to use
	 * @defaultValue Set to `null` by default
	 */
	isTWApp?: React.JSX.Element | null;
	/**
	 * React Element will be shown wile Telegram Web Application loading (preparing for usage)
	 * @defaultValue Set to `null` by default
	 */
	loading?: React.JSX.Element | null;
	/**
	 * React Element will be shown in case if application was loaded outside Telegram
	 * @defaultValue Set to `null` by default
	 */
	noTWApp?: React.JSX.Element | null;
	/**
	 * React Element will be shown in case if Telegram Web Application non-supported version (less, then versionAtLeast provided)
	 * @defaultValue Set to `null` by default
	 */
	oldTWApp?: React.JSX.Element | null;
	/**
	 * Minimum supported version by current application. Using for {@link TwaLoaderProps.isTWApp}|{@link TwaLoaderProps.noTWApp} components
	 */
	versionAtLeast?: string | number;
}

/**
 * Renders a {@link TwaLoader} component in React app as {@link react!Component}
 *
 * ```tsx
 * import { TwaLoader } from '@altiore/twa';
 *
 * <TwaLoader
 *   isTWApp={<p>Telegram App!</p>}
 *   loading={<p>...loading</p>}
 *   noTWApp={<p>Regular web application</p>}
 *   oldTWApp={<p>Telegram App (OLD non-supported version)</p>}
 *   versionAtLeast={'6.9'}
 * />
 * ```
 * @param props
 * @group React Components
 */
export const TwaLoader = ({
	loading = null,
	isTWApp = null,
	noTWApp = null,
	oldTWApp = null,
	versionAtLeast,
}: TwaLoaderProps): React.JSX.Element | null => {
	useEffect(() => {
		if (!loading && !isTWApp && !noTWApp && !oldTWApp) {
			throw new Error(
				'Please, provide at least one of loading, isTWApp, noTWApp or oldTWApp prop! No' +
					' sense of component without all this props',
			);
		}
	}, [loading, isTWApp, noTWApp, oldTWApp]);

	const { isLoaded, isLoading } = useTwa();

	const isCorrectVersion = useVersionAtLeast(versionAtLeast);

	if (isLoading) {
		return loading;
	}

	if (versionAtLeast && !isCorrectVersion) {
		return oldTWApp;
	}

	if (isLoaded && (!versionAtLeast || isCorrectVersion)) {
		return isTWApp;
	}

	return noTWApp;
};
