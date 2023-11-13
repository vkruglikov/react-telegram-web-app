[@altiore/twa](../README.md) / TwaLoaderProps

# Interface: TwaLoaderProps

The props type of [TwaLoaderProps](TwaLoaderProps.md).

## Table of contents

### Properties

- [isTWApp](TwaLoaderProps.md#istwapp)
- [loading](TwaLoaderProps.md#loading)
- [noTWApp](TwaLoaderProps.md#notwapp)
- [oldTWApp](TwaLoaderProps.md#oldtwapp)
- [versionAtLeast](TwaLoaderProps.md#versionatleast)

## Properties

### isTWApp

• `Optional` **isTWApp**: `null` \| `Element`

React Element will be shown in case if Telegram Web Application was successfully loaded and ready to use

**`Default Value`**

Set to `null` by default

---

### loading

• `Optional` **loading**: `null` \| `Element`

React Element will be shown wile Telegram Web Application loading (preparing for usage)

**`Default Value`**

Set to `null` by default

---

### noTWApp

• `Optional` **noTWApp**: `null` \| `Element`

React Element will be shown in case if application was loaded outside Telegram

**`Default Value`**

Set to `null` by default

---

### oldTWApp

• `Optional` **oldTWApp**: `null` \| `Element`

React Element will be shown in case if Telegram Web Application non-supported version (less, then versionAtLeast provided)

**`Default Value`**

Set to `null` by default

---

### versionAtLeast

• `Optional` **versionAtLeast**: `string` \| `number`

Minimum supported version by current application. Using for [isTWApp](TwaLoaderProps.md#istwapp)|[noTWApp](TwaLoaderProps.md#notwapp) components
