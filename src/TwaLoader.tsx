import React, { FC, useEffect } from 'react';

import { useTwa } from './useTwa';
import { useVersionAtLeast } from './useVersionAtLeast';

interface IProps {
	loading?: React.JSX.Element;
	isTWApp?: React.JSX.Element;
	noTWApp?: React.JSX.Element;
	oldTWApp?: React.JSX.Element;
	versionAtLeast?: string | number;
}

export const TwaLoader: FC<IProps> = ({
	loading = null,
	isTWApp = null,
	noTWApp = null,
	oldTWApp = null,
	versionAtLeast,
}): React.JSX.Element | null => {
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
