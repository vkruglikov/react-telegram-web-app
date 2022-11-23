@vkruglikov/react-telegram-web-app - v1.0.2

# @vkruglikov/react-telegram-web-app - v1.0.2

## Table of contents

### Interfaces

- [MainButtonProps](interfaces/MainButtonProps.md)

### Functions

- [MainButton](README.md#mainbutton)

## Functions

### MainButton

▸ **MainButton**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

Renders a MainMutton component in React app

The MainButton component is described in official telegram docs
https://core.telegram.org/bots/webapps#mainbutton

```tsx
<MainButton
    text="CLICK ME"
    onClick={() => console.log('Hello, I am button!)}
/>
```

**`Link`**

react!Component

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`MainButtonProps`](interfaces/MainButtonProps.md) |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

Component always returns `null`. Not renders any elements
