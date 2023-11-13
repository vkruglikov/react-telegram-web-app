import React, { FC, useEffect } from 'react';

import { useTwa } from './useTwa';
import { useVersionAtLeast } from './useVersionAtLeast';

interface IProps {
	loading?: React.JSX.Element;
	isTWApp?: React.JSX.Element;
	noTWApp?: React.JSX.Element;
	minVersion?: string | number;
}

export const TwaLoader: FC<IProps> = ({
	loading = null,
	isTWApp = null,
	noTWApp = null,
	minVersion,
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

	const isCorrectVersion = useVersionAtLeast(
		minVersion ? String(minVersion) : undefined,
	);

	if (isLoading) {
		return loading;
	}

	if (isLoaded && (!minVersion || isCorrectVersion)) {
		return isTWApp;
	}

	return noTWApp;
};
