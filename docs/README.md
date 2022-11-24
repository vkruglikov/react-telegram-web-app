@vkruglikov/react-telegram-web-app

# @vkruglikov/react-telegram-web-app

## Table of contents

### Interfaces

- [BackButtonProps](interfaces/BackButtonProps.md)
- [MainButtonProps](interfaces/MainButtonProps.md)
- [ShowPopupButton](interfaces/ShowPopupButton.md)
- [ShowPopupParams](interfaces/ShowPopupParams.md)

### Type Aliases

- [ShowPopupHandler](README.md#showpopuphandler)

### React Components

- [BackButton](README.md#backbutton)
- [MainButton](README.md#mainbutton)

### Hooks

- [useShowPopup](README.md#useshowpopup)

## Type Aliases

### ShowPopupHandler

Ƭ **ShowPopupHandler**: (`params`: [`ShowPopupParams`](interfaces/ShowPopupParams.md)) => `Promise`<`string`\>

#### Type declaration

▸ (`params`): `Promise`<`string`\>

Then handler provided Promise, and resolve the field id of the pressed button will be passed.

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

### useShowPopup

▸ **useShowPopup**(): [`ShowPopupHandler`](README.md#showpopuphandler)

The hook provided showPopup handle of the type [ShowPopupHandler](README.md#showpopuphandler).
The handle that shows a native popup described by the params argument of the type [ShowPopupParams](interfaces/ShowPopupParams.md).

#### Returns

[`ShowPopupHandler`](README.md#showpopuphandler)
