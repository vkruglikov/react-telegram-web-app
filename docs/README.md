@vkruglikov/react-telegram-web-app

# @vkruglikov/react-telegram-web-app

## Table of contents

### Interfaces

- [BackButtonProps](interfaces/BackButtonProps.md)
- [MainButtonProps](interfaces/MainButtonProps.md)
- [ScanQrPopupParams](interfaces/ScanQrPopupParams.md)
- [ShowPopupButton](interfaces/ShowPopupButton.md)
- [ShowPopupParams](interfaces/ShowPopupParams.md)
- [ThemeParams](interfaces/ThemeParams.md)

### Type Aliases

- [CloseScanQrPopupFunction](README.md#closescanqrpopupfunction)
- [ColorScheme](README.md#colorscheme)
- [ImpactOccurredFunction](README.md#impactoccurredfunction)
- [NotificationOccurredFunction](README.md#notificationoccurredfunction)
- [Options](README.md#options)
- [ReadTextFromClipboardFunction](README.md#readtextfromclipboardfunction)
- [ScanQrPopupCallback](README.md#scanqrpopupcallback)
- [SelectionChangedFunction](README.md#selectionchangedfunction)
- [ShowPopupFunction](README.md#showpopupfunction)
- [ShowScanQrPopupFunction](README.md#showscanqrpopupfunction)
- [SwitchInlineQueryFunction](README.md#switchinlinequeryfunction)
- [WebAppProviderProps](README.md#webappproviderprops)

### Hooks

- [useExpand](README.md#useexpand)
- [useHapticFeedback](README.md#usehapticfeedback)
- [useReadTextFromClipboard](README.md#usereadtextfromclipboard)
- [useScanQrPopup](README.md#usescanqrpopup)
- [useShowPopup](README.md#useshowpopup)
- [useSwitchInlineQuery](README.md#useswitchinlinequery)
- [useThemeParams](README.md#usethemeparams)

### React Components

- [BackButton](README.md#backbutton)
- [MainButton](README.md#mainbutton)
- [WebAppProvider](README.md#webappprovider)

## Type Aliases

### CloseScanQrPopupFunction

Ƭ **CloseScanQrPopupFunction**: () => `void`

#### Type declaration

▸ (): `void`

A method that closes the native popup for scanning a QR code opened with the showScanQrPopup method

##### Returns

`void`

---

### ColorScheme

Ƭ **ColorScheme**: `"light"` \| `"dark"` \| `undefined`

The color scheme currently used in the Telegram app. Either “light” or “dark”.
Can `undefined`, if `window` is undefined.

---

### ImpactOccurredFunction

Ƭ **ImpactOccurredFunction**: (`style`: `"light"` \| `"medium"` \| `"heavy"` \| `"rigid"` \| `"soft"`) => `void`

#### Type declaration

▸ (`style`): `void`

A method tells that an impact occurred. The Telegram app may play the appropriate haptics based on style value passed. Style can be one of these values:

- light, indicates a collision between small or lightweight UI objects,
- medium, indicates a collision between medium-sized or medium-weight UI objects,
- heavy, indicates a collision between large or heavyweight UI objects,
- rigid, indicates a collision between hard or inflexible UI objects,
- soft, indicates a collision between soft or flexible UI objects.
  [telegram!HapticFeedback](https://core.telegram.org/bots/webapps#hapticfeedback)

##### Parameters

| Name    | Type                                                          |
| :------ | :------------------------------------------------------------ |
| `style` | `"light"` \| `"medium"` \| `"heavy"` \| `"rigid"` \| `"soft"` |

##### Returns

`void`

---

### NotificationOccurredFunction

Ƭ **NotificationOccurredFunction**: (`type`: `"error"` \| `"success"` \| `"warning"`) => `void`

#### Type declaration

▸ (`type`): `void`

A method tells that a task or action has succeeded, failed, or produced a warning. The Telegram app may play the appropriate haptics based on type value passed. Type can be one of these values:

- error, indicates that a task or action has failed,
- success, indicates that a task or action has completed successfully,
- warning, indicates that a task or action produced a warning.
  [telegram!HapticFeedback](https://core.telegram.org/bots/webapps#hapticfeedback)

##### Parameters

| Name   | Type                                    |
| :----- | :-------------------------------------- |
| `type` | `"error"` \| `"success"` \| `"warning"` |

##### Returns

`void`

---

### Options

Ƭ **Options**: `Object`

This object describe options be able to set through WebAppProvider

#### Type declaration

| Name                         | Type      | Description                                                                                                                                                                                                                                   |
| :--------------------------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `smoothButtonsTransition?`   | `boolean` | When is `true`, we can smooth button transitions due to show(), hide() calls. So when you use MainButton or BackButton on multiple pages, there will be no noticeable flickering of the button during transitions **`Default Value`** `false` |
| `smoothButtonsTransitionMs?` | `number`  | **`Default Value`** `50` Why 50? https://w3c.github.io/requestidlecallback/#why50 **`Remarks`**                                                                                                                                               |

---

### ReadTextFromClipboardFunction

Ƭ **ReadTextFromClipboardFunction**: () => `Promise`<`string`\>

#### Type declaration

▸ (): `Promise`<`string`\>

This function provided Promise function that read text from clipboard

##### Returns

`Promise`<`string`\>

---

### ScanQrPopupCallback

Ƭ **ScanQrPopupCallback**: (`text`: `string`) => `true` \| `void`

#### Type declaration

▸ (`text`): `true` \| `void`

If an optional callback parameter was passed, the callback function will be called and the text from the QR
code will be passed as the first argument.
Returning true inside this callback function causes the popup to be closed.

##### Parameters

| Name   | Type     |
| :----- | :------- |
| `text` | `string` |

##### Returns

`true` \| `void`

---

### SelectionChangedFunction

Ƭ **SelectionChangedFunction**: () => `void`

#### Type declaration

▸ (): `void`

A method tells that the user has changed a selection. The Telegram app may play the appropriate haptics.
[telegram!HapticFeedback](https://core.telegram.org/bots/webapps#hapticfeedback)

##### Returns

`void`

---

### ShowPopupFunction

Ƭ **ShowPopupFunction**: (`params`: [`ShowPopupParams`](interfaces/ShowPopupParams.md)) => `Promise`<`string`\>

#### Type declaration

▸ (`params`): `Promise`<`string`\>

Then function provided Promise, and resolve the field id of the pressed button will be passed.

**`Throws`**

##### Parameters

| Name     | Type                                               |
| :------- | :------------------------------------------------- |
| `params` | [`ShowPopupParams`](interfaces/ShowPopupParams.md) |

##### Returns

`Promise`<`string`\>

Button id as string, it was described by [ShowPopupButton](interfaces/ShowPopupButton.md)

---

### ShowScanQrPopupFunction

Ƭ **ShowScanQrPopupFunction**: (`params`: [`ScanQrPopupParams`](interfaces/ScanQrPopupParams.md), `callback?`: [`ScanQrPopupCallback`](README.md#scanqrpopupcallback)) => `void`

#### Type declaration

▸ (`params`, `callback?`): `void`

A method that shows a native popup for scanning a QR code described
by the params argument of the type [ScanQrPopupParams](interfaces/ScanQrPopupParams.md).

##### Parameters

| Name        | Type                                                   |
| :---------- | :----------------------------------------------------- |
| `params`    | [`ScanQrPopupParams`](interfaces/ScanQrPopupParams.md) |
| `callback?` | [`ScanQrPopupCallback`](README.md#scanqrpopupcallback) |

##### Returns

`void`

---

### SwitchInlineQueryFunction

Ƭ **SwitchInlineQueryFunction**: (`query`: `string`, `chatType?`: `"users"` \| `"bots"` \| `"groups"` \| `"channels"`) => `void`

#### Type declaration

▸ (`query`, `chatType?`): `void`

This function that inserts the bot's username and the specified inline query in the current chat's input field
You have to look original description switchInlineQuery in [telegram!WebApp](https://core.telegram.org/bots/webapps#initializing-web-apps) for more information

##### Parameters

| Name        | Type                                                |
| :---------- | :-------------------------------------------------- |
| `query`     | `string`                                            |
| `chatType?` | `"users"` \| `"bots"` \| `"groups"` \| `"channels"` |

##### Returns

`void`

---

### WebAppProviderProps

Ƭ **WebAppProviderProps**: `PropsWithChildren`<{ `options?`: [`Options`](README.md#options) }\>

## Hooks

### useExpand

▸ **useExpand**(): readonly [`undefined` \| `boolean`, `DispatchWithoutAction`]

This hook provided isExpanded state, and expand() handle
You have to look original description in [telegram!WebApp](https://core.telegram.org/bots/webapps#initializing-web-apps) for more information

`isExpanded` can be `undefined`

```tsx
import { useExpand } from "@vkruglikov/react-telegram-web-app";

const [isExpanded, expand] = useExpand();
const handleClick = () => !isExpanded && expand();

<button onClick={handleClick}>
    {showTextWhenScreenExpanded && 'expanded' : 'to expand'}
</button>
```

#### Returns

readonly [`undefined` \| `boolean`, `DispatchWithoutAction`]

---

### useHapticFeedback

▸ **useHapticFeedback**(): readonly [[`ImpactOccurredFunction`](README.md#impactoccurredfunction), [`NotificationOccurredFunction`](README.md#notificationoccurredfunction), [`SelectionChangedFunction`](README.md#selectionchangedfunction)]

This hook that provided [ImpactOccurredFunction](README.md#impactoccurredfunction), [NotificationOccurredFunction](README.md#notificationoccurredfunction) and [SelectionChangedFunction](README.md#selectionchangedfunction) functions that controls haptic feedback.
You have to look original telegram description [telegram!HapticFeedback](https://core.telegram.org/bots/webapps#hapticfeedback), because it Hook implementing his.

```tsx
import { useHapticFeedback } from '@vkruglikov/react-telegram-web-app';

const [impactOccurred, notificationOccurred, selectionChanged] =
  useHapticFeedback();
// const [,notificationOccurred] = useHapticFeedback();

impactOccurred('heavy');
notificationOccurred('success');
```

#### Returns

readonly [[`ImpactOccurredFunction`](README.md#impactoccurredfunction), [`NotificationOccurredFunction`](README.md#notificationoccurredfunction), [`SelectionChangedFunction`](README.md#selectionchangedfunction)]

---

### useReadTextFromClipboard

▸ **useReadTextFromClipboard**(): [`ReadTextFromClipboardFunction`](README.md#readtextfromclipboardfunction)

This hook that provided [ReadTextFromClipboardFunction](README.md#readtextfromclipboardfunction) Promise function that read text from clipboard.
You have to look original description readTextFromClipboard in [telegram!WebApp](https://core.telegram.org/bots/webapps#initializing-web-apps), because hook just implements his.

```tsx
import { useReadTextFromClipboard } from '@vkruglikov/react-telegram-web-app';

const readText = useReadTextFromClipboard();

readText().then(console.log);
// or
await readText();
```

#### Returns

[`ReadTextFromClipboardFunction`](README.md#readtextfromclipboardfunction)

---

### useScanQrPopup

▸ **useScanQrPopup**(): readonly [[`ShowScanQrPopupFunction`](README.md#showscanqrpopupfunction), [`CloseScanQrPopupFunction`](README.md#closescanqrpopupfunction)]

The hook provided showScanQrPopup function of the type [ShowScanQrPopupFunction](README.md#showscanqrpopupfunction) and closeScanQrPopup [CloseScanQrPopupFunction](README.md#closescanqrpopupfunction).

#### Returns

readonly [[`ShowScanQrPopupFunction`](README.md#showscanqrpopupfunction), [`CloseScanQrPopupFunction`](README.md#closescanqrpopupfunction)]

---

### useShowPopup

▸ **useShowPopup**(): [`ShowPopupFunction`](README.md#showpopupfunction)

The hook provided showPopup function of the type [ShowPopupFunction](README.md#showpopupfunction).
The function that shows a native popup described by the params argument of the type [ShowPopupParams](interfaces/ShowPopupParams.md).

```tsx
import { useShowPopup } from '@vkruglikov/react-telegram-web-app';

const showPopup = useShowPopup();

showPopup({ message: 'Hello world' }).then(buttonId => console.log(buttonId));
```

#### Returns

[`ShowPopupFunction`](README.md#showpopupfunction)

---

### useSwitchInlineQuery

▸ **useSwitchInlineQuery**(): [`SwitchInlineQueryFunction`](README.md#switchinlinequeryfunction)

This hook that provided [SwitchInlineQueryFunction](README.md#switchinlinequeryfunction)
You have to look original description switchInlineQuery in [telegram!WebApp](https://core.telegram.org/bots/webapps#initializing-web-apps), because hook just implements his.

#### Returns

[`SwitchInlineQueryFunction`](README.md#switchinlinequeryfunction)

---

### useThemeParams

▸ **useThemeParams**(): readonly [[`ColorScheme`](README.md#colorscheme), [`ThemeParams`](interfaces/ThemeParams.md)]

The hook provided colorScheme and themeParams values of the type [ColorScheme](README.md#colorscheme) and [ThemeParams](interfaces/ThemeParams.md).

```tsx
import { useThemeParams } from '@vkruglikov/react-telegram-web-app';

const [colorScheme, themeParams] = useThemeParams();

console.log(colorScheme === 'dark');
console.log({
  text_color: themeParams.text_color,
  button_color: themeParams.button_color,
  bg_color: themeParams.bg_color,
});
```

#### Returns

readonly [[`ColorScheme`](README.md#colorscheme), [`ThemeParams`](interfaces/ThemeParams.md)]

## React Components

### BackButton

▸ **BackButton**(`props`): `null`

Renders a [telegram!BackButton](https://core.telegram.org/bots/webapps#backbutton) component in React app as [react!Component](https://reactjs.org/docs/react-component.html)

```tsx
import { BackButton } from '@vkruglikov/react-telegram-web-app';

<BackButton onClick={() => console.log('Hello, I am back button!')} />;
```

#### Parameters

| Name    | Type                                               |
| :------ | :------------------------------------------------- |
| `props` | [`BackButtonProps`](interfaces/BackButtonProps.md) |

#### Returns

`null`

---

### MainButton

▸ **MainButton**(`props`): `null`

Renders a [telegram!MainButton](https://core.telegram.org/bots/webapps#mainbutton) component in React app as [react!Component](https://reactjs.org/docs/react-component.html)

```tsx
import { MainButton } from '@vkruglikov/react-telegram-web-app';

<MainButton
  text="CLICK ME"
  onClick={() => console.log('Hello, I am button!')}
/>;
```

#### Parameters

| Name    | Type                                               |
| :------ | :------------------------------------------------- |
| `props` | [`MainButtonProps`](interfaces/MainButtonProps.md) |

#### Returns

`null`

---

### WebAppProvider

▸ **WebAppProvider**(`props`): `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

WebAppProvider provide context with WebApp for components and hooks.
Necessary to use only if you want to override `options`

```tsx
import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";

<WebAppProvider>
  <YourAppComponent />
</WebAppProvider>

// You can pass options {@link Options}
<WebAppProvider
  options={{
    smoothButtonsTransition: true
  }}
>
  <YourAppComponent />
</WebAppProvider>
```

#### Parameters

| Name    | Type                                                   |
| :------ | :----------------------------------------------------- |
| `props` | [`WebAppProviderProps`](README.md#webappproviderprops) |

#### Returns

`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>
