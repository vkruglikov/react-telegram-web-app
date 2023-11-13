import { useContext, useEffect, useId, useMemo } from 'react';
import { useWebApp, useSmoothButtonsTransition, systemContext } from './core';

/**
 * The props type of {@link MainButton | `MainButton`}.
 */
export interface MainButtonProps {
	/**
	 * Current button text
	 * @defaultValue Set to `CONTINUE` by default
	 */
	text?: string;
	/**
	 * The button progress state indicator.
	 * @defaultValue  Set to `false` by default
	 */
	progress?: boolean;
	/**
	 * Just an alias on the {@link MainButtonProps.disabled}
	 * @deprecated Use {@link MainButtonProps.disabled} instead, will be removed
	 * @ignore
	 */
	disable?: boolean;
	/**
	 * The button disable state.
	 * @defaultValue Set to `false` y defaults
	 */
	disabled?: boolean;
	/** The button press event handler */
	onClick?: () => void;
	/**
	 * Current button color.
	 * @defaultValue Set to themeParams.button_color by default
	 */
	color?: string;
	/**
	 * Current button text color
	 * @defaultValue Set to themeParams.button_text_color by default
	 */
	textColor?: string;
}

/**
 * Renders a {@link telegram!MainButton} component in React app as {@link react!Component}
 *
 * ```tsx
 * import { MainButton } from "@altiore/twa";
 *
 * <MainButton
 *     text="CLICK ME"
 *     onClick={() => console.log('Hello, I am button!')}
 * />
 * ```
 * @param props
 * @group React Components
 */
const MainButton = ({
	text = 'CONTINUE',
	progress = false,
	disable: disable_old,
	disabled: disable_new = false,
	color,
	textColor,
	onClick,
}: MainButtonProps): null => {
	const system = useContext(systemContext);
	const buttonId = useId();
	const WebApp = useWebApp();
	const mainBtn = useMemo(() => WebApp?.MainButton, [WebApp]);
	const themeParams = useMemo(() => WebApp?.themeParams, [WebApp]);
	const disabled = useMemo(
		() => disable_old || disable_new,
		[disable_old, disable_new],
	);

	useEffect(() => {
		mainBtn?.setParams({
			color: color || themeParams?.button_color || '#fff',
		});
	}, [color, themeParams, mainBtn]);

	useEffect(() => {
		mainBtn?.setParams({
			text_color: textColor || themeParams?.button_text_color || '#000',
		});
	}, [mainBtn, themeParams, textColor]);

	useEffect(() => {
		mainBtn?.setText(text);
	}, [text, mainBtn]);

	useEffect(() => {
		if (disabled) {
			mainBtn?.disable();
		} else if (!disabled) {
			mainBtn?.enable();
		}
	}, [disabled, mainBtn]);

	useEffect(() => {
		if (progress) {
			mainBtn?.showProgress(false);
		} else if (!progress) {
			mainBtn?.hideProgress();
		}
	}, [progress, mainBtn]);

	useEffect(() => {
		if (!onClick) {
			return;
		}

		mainBtn?.onClick(onClick);
		return () => {
			mainBtn?.offClick(onClick);
		};
	}, [onClick, mainBtn]);

	useSmoothButtonsTransition({
		show: mainBtn?.show,
		hide: mainBtn?.hide,
		currentShowedIdRef: system.MainButton,
		id: buttonId,
	});

	return null;
};

export default MainButton;
