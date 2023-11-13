import React, { FC, useEffect } from 'react';

import { useTwa } from './useTwa';
import { useVersionAtLeast } from './useVersionAtLeast';
import useWebApp from './useWebApp';
import { useIsVersionAtLeast } from './useIsVersionAtLeast';
import useShowPopup from './useShowPopup';

interface IProps {
	loading?: React.JSX.Element;
	isTWApp?: React.JSX.Element;
	noTWApp?: React.JSX.Element;
	minVersion?: string | number;
	showNotification?: boolean;
}

export const TwaLoader: FC<IProps> = ({
	loading = null,
	isTWApp = null,
	noTWApp = null,
	minVersion = null,
	showNotification = false,
}): React.JSX.Element | null => {
	useEffect(() => {
		if (!loading && !isTWApp && !noTWApp) {
			throw new Error(
				'Please, provide at least one of loading, isTWApp or noTWApp prop! No' +
					' sense of component without all this props',
			);
		}
	}, [loading, isTWApp, noTWApp]);

	const { isLoaded, isLoading } = useTwa();

	const isCorrectVersion = useVersionAtLeast(minVersion ?? '6.2');

	const isVersionAtLeast = useIsVersionAtLeast();

	const showPopup = useShowPopup();

	useEffect(() => {
		if (
			showNotification &&
			isLoaded &&
			minVersion &&
			isVersionAtLeast('6.2') &&
			!isCorrectVersion
		) {
			showPopup({
				message: `Please update your Telegram app to the latest version to use this app. Minimum supported version is "${minVersion}"`,
			})
				.then()
				.catch(console.error);
		}
	}, [
		isVersionAtLeast,
		showPopup,
		isLoaded,
		isCorrectVersion,
		showNotification,
		minVersion,
	]);

	const webApp = useWebApp();

	if (isLoading) {
		return loading;
	}

	if (isLoaded && webApp && (!minVersion || isCorrectVersion)) {
		return isTWApp;
	}

	return noTWApp;
};
