import { useContext, useEffect, useId, useMemo } from 'react';
import { useWebApp, useSmoothButtonsTransition, systemContext } from './core';

/**
 * The props type of {@link BackButton | `BackButton`}.
 */
export interface BackButtonProps {
	/** The back button press event handler */
	onClick?: () => void;
}

/**
 * Renders a {@link telegram!BackButton} component in React app as {@link react!Component}
 *
 * ```tsx
 * import { BackButton } from "@altiore/twa";
 *
 * <BackButton
 *     onClick={() => console.log('Hello, I am back button!')}
 * />
 * ```
 * @param props
 * @group React Components
 */
const BackButton = ({ onClick }: BackButtonProps): null => {
	const system = useContext(systemContext);
	const buttonId = useId();
	const WebApp = useWebApp();
	const backBtn = useMemo(() => WebApp?.BackButton, [WebApp]);

	useEffect(() => {
		if (!onClick || !backBtn) {
			return;
		}

		backBtn.onClick(onClick);
		return () => {
			backBtn.offClick(onClick);
		};
	}, [onClick, backBtn]);

	useSmoothButtonsTransition({
		show: backBtn?.show,
		hide: backBtn?.hide,
		currentShowedIdRef: system.BackButton,
		id: buttonId,
	});

	return null;
};

export default BackButton;
