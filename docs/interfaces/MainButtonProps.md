[@vkruglikov/react-telegram-web-app - v1.1.0](../README.md) / MainButtonProps

# Interface: MainButtonProps

The props type of [`MainButton`](../README.md#mainbutton).

## Table of contents

### Properties

- [color](MainButtonProps.md#color)
- [disable](MainButtonProps.md#disable)
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

___

### disable

• `Optional` **disable**: `boolean`

The button disable state.

**`Default Value`**

Set to `false` y defaults

___

### onClick

• `Optional` **onClick**: () => `void`

#### Type declaration

▸ (): `void`

The button press event handler

##### Returns

`void`

___

### progress

• `Optional` **progress**: `boolean`

The button progress state indicator.

**`Default Value`**

Set to `false` by default

___

### text

• `Optional` **text**: `string`

Current button text

**`Default Value`**

Set to `CONTINUE` by default

___

### textColor

• `Optional` **textColor**: `string`

Current button text color

**`Default Value`**

Set to themeParams.button_text_color by default
