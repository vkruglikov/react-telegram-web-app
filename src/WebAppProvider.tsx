import React, {
	PropsWithChildren,
	ReactElement,
	useEffect,
	useMemo,
	useState,
} from 'react';
import {
	webAppContext,
	optionsContext,
	systemContext,
	Options,
	DEFAULT_OPTIONS,
	DEFAULT_WEBAPP,
	createSystemContextValue,
} from './core';
import { WebApp } from './core/twa-types';
import { loadScript } from './core/utils';

export type WebAppProviderProps = PropsWithChildren<{
	options?: Options;
}>;

const SCRIPT = 'https://telegram.org/js/telegram-web-app.js';

/**
 * WebAppProvider provide context with WebApp for components and hooks.
 * Necessary to use only if you want to override `options`
 *
 * ```tsx
 * import { WebAppProvider } from "@altiore/twa";
 *
 * <WebAppProvider>
 *   <YourAppComponent />
 * </WebAppProvider>
 *
 * // You can pass options {@link Options}
 * <WebAppProvider
 *   options={{
 *     smoothButtonsTransition: true
 *   }}
 * >
 *   <YourAppComponent />
 * </WebAppProvider>
 * ```
 * @param props
 * @group React Components
 */
const WebAppProvider = ({
	children,
	options,
}: WebAppProviderProps): ReactElement => {
	const mergedOptions = useMemo(
		() => ({
			...DEFAULT_OPTIONS,
			...options,
		}),
		[options],
	);

	const [webApp, setWebApp] = useState<WebApp | null>(DEFAULT_WEBAPP);

	useEffect(() => {
		if (!options?.smoothButtonsTransition) return;
		const forceHideButtons = () => {
			webApp?.MainButton?.hide();
			webApp?.BackButton?.hide();
		};

		window.addEventListener('beforeunload', forceHideButtons);
		return () => window.removeEventListener('beforeunload', forceHideButtons);
	}, [options?.smoothButtonsTransition, webApp]);

	const [isLoading, setIsLoading] = useState(true);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		loadScript(SCRIPT)
			.then(() => {
				setIsLoaded(true);
				setIsLoading(false);
				setWebApp(
					typeof window !== 'undefined' && window?.Telegram?.WebApp
						? window.Telegram.WebApp
						: null,
				);
			})
			.catch(() => {
				setIsLoaded(false);
				setIsLoading(false);
			});
	}, [setIsLoading, setIsLoaded]);

	const systemValue = useMemo(createSystemContextValue, []);

	const fullSystemValue = useMemo(
		() => ({ ...systemValue, isTwaLoaded: isLoaded, isTwaLoading: isLoading }),
		[systemValue, isLoading, isLoaded],
	);

	return (
		<systemContext.Provider value={fullSystemValue}>
			<webAppContext.Provider value={webApp}>
				<optionsContext.Provider value={mergedOptions}>
					{children}
				</optionsContext.Provider>
			</webAppContext.Provider>
		</systemContext.Provider>
	);
};
export default WebAppProvider;
