# react-telegram-web-app

React components for Telegram WebApp

[![npm](https://img.shields.io/npm/v/@vkruglikov/react-telegram-web-app.svg)](https://www.npmjs.com/package/@vkruglikov/react-telegram-web-app)
[![types](https://badgen.net/npm/types/@vkruglikov/react-telegram-web-app)](https://npmjs.org/package/@vkruglikov/react-telegram-web-app)
[![GitHub Actions CI](https://github.com/vkruglikov/react-telegram-web-app/actions/workflows/release.yml/badge.svg)](https://github.com/vkruglikov/react-telegram-web-app/actions/workflows/release.yml)
[![License](https://badgen.net/github/license/vkruglikov/react-telegram-web-app)](https://github.com/vkruglikov/react-telegram-web-app/blob/master/LICENSE)

## 🔴 Live Demo & Code Examples

You can try open demo telegram bot with React WebApp [@react_telegram_web_app_bot](https://t.me/react_telegram_web_app_bot).

Also, you can look demo [source code](./demo/src).

## 🔧 Installation & Get started

1️⃣ &nbsp;**Foremost**, you have to do [initializing web apps](https://core.telegram.org/bots/webapps#initializing-web-apps) step, because package has dependency of Telegram Web App context.

2️⃣ &nbsp;**Install** by running: `npm i @vkruglikov/react-telegram-web-app --save`. Today we support React^18.

3️⃣ &nbsp;**Try it out** by writing code.

```typescript jsx
import React from 'react';
import { MainButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';

const App = () => {
  const showPopup = useShowPopup();

  return (
    <>
      Some page content...
      <MainButton
        text="SHOW POPUP"
        onClick={() => {
          showPopup({
            message: "Hello, I'am showPopup handle",
          });
        }}
      />
    </>
  );
};
```

## ✨ Short Documentation

- [MainButton](./docs/README.md#mainbutton) -
  The component controls the main button, which is displayed at the bottom of the Web App in the Telegram interface.
- [BackButton](./docs/README.md#backbutton) -
  This component controls the back button, which can be displayed in the header of the Web App in the Telegram interface.
- [useShowPopup](./docs/README.md#useshowpopup) -
  The hook that provided showPopup function that shows a native popup.
- [useHapticFeedback](./docs/README.md#usehapticfeedback) -
  This hook that provided `impactOccurred`, `notificationOccurred` and `selectionChanged` functions that controls haptic feedback.
- [useThemeParams](./docs/README.md#usethemeparams) -
  This hook that provided `colorScheme` and `themeParams` object.
- [useScanQrPopup](./docs/README.md#usescanqrpopup) -
  This hook that provided `showScanQrPopup` and `closeScanQrPopup` functions.
- [useReadTextFromClipboard](./docs/README.md#usereadtextfromclipboard) -
  This hook that provided `readTextFromClipboard` function.
- [useSwitchInlineQuery](./docs/README.md#useswitchinlinequery) -
  This hook that provided `switchInlineQuery` function.

## 🛣 Roadmap

Here's what's coming up:

- [ ] In the future, We would like to use us components also in Web application, without Telegram context.
- [ ] All Telegram WebApp feature support.
- [x] Main Telegram WebApp feature support.

## 🥂 License

[MIT](./LICENSE)
