import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './logo.svg';

import MainButtonDemo from './MainButtonDemo';
import BackButtonDemo from './BackButtonDemo';
import ShowPopupDemo from './ShowPopupDemo';
import { ConfigProvider, theme } from 'antd';

import HapticFeedbackDemo from './HapticFeedbackDemo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <div>
    <ConfigProvider
      theme={
        typeof window !== 'undefined' &&
        // @ts-ignore
        window.Telegram?.WebApp?.themeParams?.text_color
          ? {
              // @ts-ignore
              algorithm:
                window.Telegram?.WebApp?.colorScheme === 'dark'
                  ? theme.darkAlgorithm
                  : theme.defaultAlgorithm,
              token: {
                // @ts-ignore
                colorText: window.Telegram.WebApp.themeParams.text_color,
                // @ts-ignore
                colorPrimary: window.Telegram.WebApp.themeParams.button_color,
                // @ts-ignore
                colorBgBase: window.Telegram.WebApp.themeParams.bg_color,
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
      </div>
    </ConfigProvider>
  </div>,
);
