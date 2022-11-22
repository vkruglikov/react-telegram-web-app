import {FC, useEffect} from 'react';

const WebApp = window.Telegram.WebApp;
const WebAppMainButton = WebApp.MainButton;

export interface MainButtonProps {
    text?: string;
    progress?: boolean;
    disable?: boolean;
    onClick?: () => void;
    color?: `#${string}`;
    textColor?: `#${string}`;
}

const MainButton: FC<MainButtonProps> = ({
    text= 'CONTINUE',
    progress= false,
    disable= false,
    color,
    textColor,
    onClick,
}) => {
    useEffect(() => {
        WebAppMainButton.show();
        return () => {
            WebAppMainButton.hide();
        }
    }, []);

    useEffect(() => {
        WebAppMainButton.setParams({
            color: color || WebApp.themeParams.button_color || '#fff'
        });
    },[color]);

    useEffect(() => {
        WebAppMainButton.setParams({
            text_color: textColor || WebApp.themeParams.button_text_color || '#000'
        });
    },[textColor]);

    useEffect(() => {
        WebAppMainButton.setText(text);
    }, [text]);

    useEffect(() => {
        if (WebAppMainButton.isActive && disable) {
            WebAppMainButton.disable();
        } else if (!WebAppMainButton.isActive && !disable) {
            WebAppMainButton.enable();
        }
    }, [disable]);

    useEffect(() => {
        if (!WebAppMainButton.isProgressVisible && progress) {
            WebAppMainButton.showProgress(false);
        } else if (WebAppMainButton.isProgressVisible && !progress) {
            WebAppMainButton.hideProgress();
        }
    }, [progress]);

    useEffect(() => {
        if (!onClick) {
            return;
        }

        WebAppMainButton.onClick(onClick);
        return () => {
            WebAppMainButton.offClick(onClick);
        }
    }, [onClick]);

    return null;
}

export default MainButton;