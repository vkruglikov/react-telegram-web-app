[@vkruglikov/react-telegram-web-app](../README.md) / MainButtonProps

# Interface: MainButtonProps

The props type of [`MainButton`](../README.md#mainbutton).

## Table of contents

### Properties

- [color](MainButtonProps.md#color)
- [disabled](MainButtonProps.md#disabled)
- [onClick](MainButtonProps.md#onclick)
- [progress](MainButtonProps.md#progress)
- [text](MainButtonProps.md#text)
- [textColor](MainButtonProps.md#textcolor)

## Properties

### color

• `Optional` **color**: `string`

Current button color.

**`Default Value`**

Set to themeParams.button_color by default

---

### disabled

• `Optional` **disabled**: `boolean`

The button disable state.

**`Default Value`**

Set to `false` y defaults

---

### onClick

• `Optional` **onClick**: () => `void`

#### Type declaration

▸ (): `void`

The button press event handler

##### Returns

`void`

---

### progress

• `Optional` **progress**: `boolean`

The button progress state indicator.

**`Default Value`**

Set to `false` by default

---

### text

• `Optional` **text**: `string`

Current button text

**`Default Value`**

Set to `CONTINUE` by default

---

### textColor

• `Optional` **textColor**: `string`

Current button text color

**`Default Value`**

Set to themeParams.button_text_color by default
