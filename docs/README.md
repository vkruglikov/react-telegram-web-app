@vkruglikov/react-telegram-web-app

# @vkruglikov/react-telegram-web-app

## Table of contents

### Interface Props

- [MainButtonProps](interfaces/MainButtonProps.md)

### React Components

- [MainButton](README.md#mainbutton)

## React Components

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
