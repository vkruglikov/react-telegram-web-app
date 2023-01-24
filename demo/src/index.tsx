import React from 'react';
import ReactDOM from 'react-dom/client';
import { useThemeParams } from '@vkruglikov/react-telegram-web-app';
import { ConfigProvider, theme } from 'antd';
import 'antd/dist/reset.css';

import './index.css';
import logo from './logo.svg';

import MainButtonDemo from './MainButtonDemo';
import BackButtonDemo from './BackButtonDemo';
import ShowPopupDemo from './ShowPopupDemo';
import HapticFeedbackDemo from './HapticFeedbackDemo';
import ScanQrPopupDemo from './ScanQrPopupDemo';

const DemoApp = () => {
  const [colorScheme, themeParams] = useThemeParams();

  return (
    <div>
      <ConfigProvider
        theme={
          themeParams.text_color
            ? {
                algorithm:
                  colorScheme === 'dark'
                    ? theme.darkAlgorithm
                    : theme.defaultAlgorithm,
                token: {
                  colorText: themeParams.text_color,
                  colorPrimary: themeParams.button_color,
                  colorBgBase: themeParams.bg_color,
                },
              }
            : undefined
        }
      >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="contentWrapper">
          <MainButtonDemo />
          <BackButtonDemo />
          <ShowPopupDemo />
          <HapticFeedbackDemo />
          <ScanQrPopupDemo />
        </div>
      </ConfigProvider>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<DemoApp />);
