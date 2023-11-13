# React components for Telegram MiniApp

[![npm](https://img.shields.io/npm/v/@altiore/twa.svg)](https://www.npmjs.com/package/@altiore/twa)
[![types](https://badgen.net/npm/types/@altiore/twa)](https://npmjs.org/package/@altiore/twa)
[![GitHub Actions CI](https://github.com/altiore/twa/actions/workflows/release.yml/badge.svg)](https://github.com/altiore/twa/actions/workflows/release.yml)
[![License](https://badgen.net/github/license/altiore/twa)](https://github.com/altiore/twa/blob/master/LICENSE)
![Tests](https://github.com/altiore/twa/actions/workflows/tests.yml/badge.svg)

## 🔴 Live Demo & Code Examples

You can try open demo telegram bot with React WebApp [@react_telegram_web_app_bot](https://t.me/react_telegram_web_app_bot/demo).

Also, you can look demo [source code](./demo/src).

## 🔧 Installation & Get started

1️⃣ &nbsp;**Install** by running: `npm i @altiore/twa -SE`. We support React^18.

2️⃣ &nbsp;**Try it out** by writing code.

```jsx
import { MainButton, useShowPopup } from '@altiore/twa';

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

- [TwaLoader](./docs/README.md#twaloader) -
  This component helps to show content dependent on was TWA application loaded or not

- [WebAppProvider](./docs/README.md#webappprovider) -
  WebAppProvider provide context with WebApp for components and hooks.
  You can try to pass an object with options

  ```jsx
  import { WebAppProvider, MainButton, BackButton } from '@altiore/twa';

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
- [useVersionAtLeast](./docs/README.md#useversionatleast) -
  This hook provides `isVersionAtLeast` function result which is always boolean
- [useTwa](./docs/README.md#usetwa) -
  This hook provides boolean values indicating whether the Telegram Web App is ready for use (loaded) or not (still loading).
- [useWebApp](./docs/README.md#usewebapp) -
  This hook just provides native `WebApp` object

## 🛣 Roadmap

Here's what's coming up:

- [ ] All Telegram WebApp feature support.
- [x] Main Telegram WebApp feature support.
- [x] TwaLoader component to better support TWA and non TWA applications

## 🥂 License

[MIT](./LICENSE)

## 💻👞🙊📚 Join to discussions

Create discussions, ask questions, share experiences and discuss ideas with everyone together

https://github.com/altiore/twa/discussions
