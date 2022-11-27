import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './logo.svg';

import MainButtonDemo from './MainButtonDemo';
import BackButtonDemo from './BackButtonDemo';
import ShowPopupDemo from './ShowPopupDemo';
import { ConfigProvider } from 'antd';

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
              token: {
                // @ts-ignore
                colorText: window.Telegram.WebApp.themeParams.text_color,
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
      </div>
    </ConfigProvider>
  </div>,
);
