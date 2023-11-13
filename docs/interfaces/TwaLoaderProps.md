[@altiore/twa](../README.md) / TwaLoaderProps

# Interface: TwaLoaderProps

The props type of [`TwaLoader`](../README.md#twaloader).

## Table of contents

### Properties

- [isTWApp](TwaLoaderProps.md#istwapp)
- [loading](TwaLoaderProps.md#loading)
- [noTWApp](TwaLoaderProps.md#notwapp)
- [oldTWApp](TwaLoaderProps.md#oldtwapp)
- [versionAtLeast](TwaLoaderProps.md#versionatleast)

## Properties

### isTWApp

• `Optional` **isTWApp**: `React.JSX.Element`

#### Type declaration

▸ React.JSX.Element

React Element will be shown in case if Telegram Web Application was successfully loaded and ready to use

### loading

• `Optional` **loading**: `React.JSX.Element`

#### Type declaration

▸ React.JSX.Element

React Element will be shown wile Telegram Web Application loading (preparing for usage)

### noTWApp

• `Optional` **noTWApp**: `React.JSX.Element`

#### Type declaration

▸ React.JSX.Element

React Element will be shown in case if application was loaded outside Telegram

### oldTWApp

• `Optional` **oldTWApp**: `React.JSX.Element`

#### Type declaration

▸ React.JSX.Element

React Element will be shown in case if Telegram Web Application non-supported version (less, then versionAtLeast provided)

### versionAtLeast

• `Optional` **versionAtLeast**: `string` | `number`

#### Type declaration

▸ `string` | `number`

Minimum supported version by current application. Using for [isTWApp](TwaLoaderProps.md#istwapp)|[oldTWApp](TwaLoaderProps.md#oldtwapp) components
