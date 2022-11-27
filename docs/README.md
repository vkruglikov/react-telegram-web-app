@vkruglikov/react-telegram-web-app

# @vkruglikov/react-telegram-web-app

## Table of contents

### Interfaces

- [BackButtonProps](interfaces/BackButtonProps.md)
- [MainButtonProps](interfaces/MainButtonProps.md)
- [ShowPopupButton](interfaces/ShowPopupButton.md)
- [ShowPopupParams](interfaces/ShowPopupParams.md)

### Type Aliases

- [ImpactOccurredFunction](README.md#impactoccurredfunction)
- [NotificationOccurredFunction](README.md#notificationoccurredfunction)
- [SelectionChangedFunction](README.md#selectionchangedfunction)
- [ShowPopupFunction](README.md#showpopupfunction)

### React Components

- [BackButton](README.md#backbutton)
- [MainButton](README.md#mainbutton)

### Hooks

- [useHapticFeedback](README.md#usehapticfeedback)
- [useShowPopup](README.md#useshowpopup)

## Type Aliases

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

## React Components

### BackButton

▸ **BackButton**(`props`, `context?`): `null` \| `ReactElement`<`any`, `any`\>

Renders a [telegram!BackButton](https://core.telegram.org/bots/webapps#backbutton) component in React app as [react!Component](https://reactjs.org/docs/react-component.html)

```tsx
import { BackButton } from '@vkruglikov/react-telegram-web-app';

<BackButton onClick={() => console.log('Hello, I am back button!')} />;
```

#### Parameters

| Name       | Type                                               |
| :--------- | :------------------------------------------------- |
| `props`    | [`BackButtonProps`](interfaces/BackButtonProps.md) |
| `context?` | `any`                                              |

#### Returns

`null` \| `ReactElement`<`any`, `any`\>

Component always returns `null`. Not renders any elements

---

### MainButton

▸ **MainButton**(`props`, `context?`): `null` \| `ReactElement`<`any`, `any`\>

Renders a [telegram!MainButton](https://core.telegram.org/bots/webapps#mainbutton) component in React app as [react!Component](https://reactjs.org/docs/react-component.html)

```tsx
import { MainButton } from '@vkruglikov/react-telegram-web-app';

<MainButton
  text="CLICK ME"
  onClick={() => console.log('Hello, I am button!')}
/>;
```

#### Parameters

| Name       | Type                                               |
| :--------- | :------------------------------------------------- |
| `props`    | [`MainButtonProps`](interfaces/MainButtonProps.md) |
| `context?` | `any`                                              |

#### Returns

`null` \| `ReactElement`<`any`, `any`\>

Component always returns `null`. Not renders any elements

## Hooks

### useHapticFeedback

▸ **useHapticFeedback**(): readonly [[`ImpactOccurredFunction`](README.md#impactoccurredfunction), [`NotificationOccurredFunction`](README.md#notificationoccurredfunction), [`SelectionChangedFunction`](README.md#selectionchangedfunction)]

This hook that provided [ImpactOccurredFunction](README.md#impactoccurredfunction), [NotificationOccurredFunction](README.md#notificationoccurredfunction) and [SelectionChangedFunction](README.md#selectionchangedfunction) functions that controls haptic feedback.
You have to look original telegram description [telegram!HapticFeedback](https://core.telegram.org/bots/webapps#hapticfeedback), because it Hook implementing his.

#### Returns

readonly [[`ImpactOccurredFunction`](README.md#impactoccurredfunction), [`NotificationOccurredFunction`](README.md#notificationoccurredfunction), [`SelectionChangedFunction`](README.md#selectionchangedfunction)]

---

### useShowPopup

▸ **useShowPopup**(): [`ShowPopupFunction`](README.md#showpopupfunction)

The hook provided showPopup function of the type [ShowPopupFunction](README.md#showpopupfunction).
The function that shows a native popup described by the params argument of the type [ShowPopupParams](interfaces/ShowPopupParams.md).

#### Returns

[`ShowPopupFunction`](README.md#showpopupfunction)
