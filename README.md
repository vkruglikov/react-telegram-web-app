# React components for Telegram MiniApp

[![npm](https://img.shields.io/npm/v/@vkruglikov/react-telegram-web-app.svg)](https://www.npmjs.com/package/@vkruglikov/react-telegram-web-app)
[![types](https://badgen.net/npm/types/@vkruglikov/react-telegram-web-app)](https://npmjs.org/package/@vkruglikov/react-telegram-web-app)
[![GitHub Actions CI](https://github.com/vkruglikov/react-telegram-web-app/actions/workflows/release.yml/badge.svg)](https://github.com/vkruglikov/react-telegram-web-app/actions/workflows/release.yml)
[![License](https://badgen.net/github/license/vkruglikov/react-telegram-web-app)](https://github.com/vkruglikov/react-telegram-web-app/blob/master/LICENSE)
![Tests](https://github.com/vkruglikov/react-telegram-web-app/actions/workflows/tests.yml/badge.svg)

## 🔴 Live Demo & Code Examples

You can try open demo telegram bot with React WebApp [@react_telegram_web_app_bot](https://t.me/react_telegram_web_app_bot/demo).

Also, you can look demo [source code](./demo/src).

## 🔧 Installation & Get started

1️⃣ &nbsp;**Foremost**, you have to do [initializing web apps](https://core.telegram.org/bots/webapps#initializing-mini-apps) step, because package has dependency of Telegram Web App context.

2️⃣ &nbsp;**Install** by running: `npm i @vkruglikov/react-telegram-web-app --save`. Today we support React^18.

3️⃣ &nbsp;**Try it out** by writing code.

```jsx
import { MainButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';

const Content = () => {
  const showPopup = useShowPopup();

  const handleClick = () =>
    showPopup({
      message: 'Hello, I am popup',
    });

  return <MainButton text="SHOW POPUP" onClick={handleClick} />;
};
```

## ✨ Short Documentation

### Components

- [MainButton](./docs/README.md#mainbutton) -
  The component controls the main button, which is displayed at the bottom of the Web App in the Telegram interface.

- [BackButton](./docs/README.md#backbutton) -
  This component controls the back button, which can be displayed in the header of the Web App in the Telegram interface.

- [WebAppProvider](./docs/README.md#webappprovider) -
  WebAppProvider provide context with WebApp for components and hooks.
  You can try to pass an object with options
- [SettingsButton](./docs/README.md#settingsbutton) Settings button (mvp)

  ```jsx
  import { WebAppProvider, MainButton, BackButton } from '@vkruglikov/react-telegram-web-app';

  <WebAppProvider
    options={{
      smoothButtonsTransition: true,
    }}
  >
    {/** Use components inside provider */}
    <MainButton {...} />
    <BackButton {...} />
  </WebAppProvider>
  ```

### Hooks

- [useShowPopup](./docs/README.md#useshowpopup) -
  This hook provides `showPopup` function that shows a native popup.
- [useHapticFeedback](./docs/README.md#usehapticfeedback) -
  This hook provides `impactOccurred`, `notificationOccurred` and `selectionChanged` functions that controls haptic feedback.
- [useThemeParams](./docs/README.md#usethemeparams) -
  This hook provides `colorScheme` and `themeParams` object.
- [useScanQrPopup](./docs/README.md#usescanqrpopup) -
  This hook provides `showScanQrPopup` and `closeScanQrPopup` functions.
- [useReadTextFromClipboard](./docs/README.md#usereadtextfromclipboard) -
  This hook provides `readTextFromClipboard` function.
- [useSwitchInlineQuery](./docs/README.md#useswitchinlinequery) -
  This hook provides `switchInlineQuery` function.
- [useExpand](./docs/README.md#useexpand) -
  This hook provides `isExpanded` state, and `expand()` handle.
- [useCloudStorage](./docs/README.md#usecloudstorage) -
  This hook provides `CloudStorage` object as Promise functions
- [useInitData](./docs/README.md#useinitdata) -
  This hook provides `InitDataUnsafe` and `InitData` object
- [useWebApp](./docs/README.md#usewebapp) -
  This hook just provides native `WebApp` object

## 🛣 Roadmap

Here's what's coming up:

- [ ] In the future, We would like to use us components also in Web application, without Telegram context.
- [ ] All Telegram WebApp feature support
- [x] Main Telegram WebApp feature support

## Contributors

As always, thanks to our amazing contributors!

<!--GAMFC--><a href="https://github.com/vkruglikov" title="Valentin"><img src="https://avatars.githubusercontent.com/u/9719024?v=4" width="42;" alt="Valentin"/></a>
<a href="https://github.com/xsa-dev" title="Alxy Savin"><img src="https://avatars.githubusercontent.com/u/16959353?v=4" width="42;" alt="Alxy Savin"/></a>
<a href="https://github.com/New-dev0" title="Devesh Pal"><img src="https://avatars.githubusercontent.com/u/69723581?v=4" width="42;" alt="Devesh Pal"/></a>
<a href="https://github.com/alexgoto" title="Alexandr Gotovtsev"><img src="https://avatars.githubusercontent.com/u/43707500?v=4" width="42;" alt="Alexandr Gotovtsev"/></a><!--GAMFC-END-->

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## Contributing

- Read up about its [🛣 Roadmap](#-roadmap) and [official documentation](https://core.telegram.org/bots/webapps) Telegram Mini Apps
- Have questions? Check out our [examples](#-live-demo--code-examples), [duscussions](https://github.com/vkruglikov/react-telegram-web-app/discussions) and [issues](https://github.com/vkruglikov/react-telegram-web-app/discussions)
- [Fork](https://github.com/vkruglikov/react-telegram-web-app/fork) and [Contribute](./CONTRIBUTING.md) your own modifications

## 🥂 License

[MIT](./LICENSE)

## 💻👞🙊📚 Join to discussions

Create discussions, ask questions, share experiences and discuss ideas with everyone together

https://github.com/vkruglikov/react-telegram-web-app/discussions
