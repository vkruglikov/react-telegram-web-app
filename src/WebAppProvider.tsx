import React, {
	PropsWithChildren,
	ReactElement,
	useEffect,
	useMemo,
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

export type WebAppProviderProps = PropsWithChildren<{
	options?: Options;
}>;

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
	const systemValue = useMemo(createSystemContextValue, []);

	useEffect(() => {
		if (!options?.smoothButtonsTransition) return;
		const forceHideButtons = () => {
			DEFAULT_WEBAPP?.MainButton?.hide();
			DEFAULT_WEBAPP?.BackButton?.hide();
		};

		window.addEventListener('beforeunload', forceHideButtons);
		return () => window.removeEventListener('beforeunload', forceHideButtons);
	}, [options?.smoothButtonsTransition]);

	return (
		<systemContext.Provider value={systemValue}>
			<webAppContext.Provider value={DEFAULT_WEBAPP}>
				<optionsContext.Provider value={mergedOptions}>
					{children}
				</optionsContext.Provider>
			</webAppContext.Provider>
		</systemContext.Provider>
	);
};
export default WebAppProvider;
