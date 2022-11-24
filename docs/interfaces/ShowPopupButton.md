[@vkruglikov/react-telegram-web-app](../README.md) / ShowPopupButton

# Interface: ShowPopupButton

You have to see original interface [telegram!PopupButton](https://core.telegram.org/bots/webapps#popupbutton).

## Hierarchy

- `Record`<`string`, `unknown`\>

  ↳ **`ShowPopupButton`**

## Table of contents

### Properties

- [id](ShowPopupButton.md#id)
- [text](ShowPopupButton.md#text)
- [type](ShowPopupButton.md#type)

## Properties

### id

• `Optional` **id**: `string`

Optional. Identifier of the button, 0-64 characters.
Set to empty string by default.
If the button is pressed, its id is returned in the callback and the popupClosed event.

---

### text

• `Optional` **text**: `string`

Optional. The text to be displayed on the button, 0-64 characters.
Required if type is default or destructive.
Irrelevant for other types.

---

### type

• `Optional` **type**: `string`

Optional. Type of the button.
Set to default by default.
