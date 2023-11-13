import useWebApp from './useWebApp';
import React, { FC, useContext, useEffect } from 'react';

import { systemContext } from './core';

interface IProps {
	loading?: React.JSX.Element;
	isTWApp?: React.JSX.Element;
	noTWApp?: React.JSX.Element;
}

export const TwaLoader: FC<IProps> = ({
	loading = null,
	isTWApp = null,
	noTWApp = null,
}): React.JSX.Element | null => {
	useEffect(() => {
		if (!loading && !isTWApp && !noTWApp) {
			throw new Error(
				'Please, provide at least one of loading, isTWApp or noTWApp prop! No' +
					' sense of component without all this props',
			);
		}
	}, [loading, isTWApp, noTWApp]);

	const system = useContext(systemContext);

	const webApp = useWebApp();

	if (system.isTwaLoading) {
		return loading;
	}

	// Вызов инициализации SDK еще не происходил. Нам пока нечего показать.
	if (system.isTwaLoaded) {
		if (webApp) {
			return isTWApp;
		}

		return loading;
	}

	return noTWApp;
};
