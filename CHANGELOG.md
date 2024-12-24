# @vkruglikov/react-telegram-web-app

## 2.2.0

### Minor Changes

- e3bcaf0: Add SettingsButton

## 2.1.9

### Patch Changes

- 5f49e9b: test fix

## 2.1.8

### Patch Changes

- f187824: test fix

## 2.1.7

### Patch Changes

- 94b5e28: Added experimental `async` mode

## 2.1.6

### Patch Changes

- 6631ede: useInitData returns undefined if window is unavailable

## 2.1.5

### Patch Changes

- 1e3beb1: Update docs

## 2.1.4

### Patch Changes

- f705506: Fix signature bug

## 2.1.3

### Patch Changes

- e4b17fb: Fix types

## 2.1.2

### Patch Changes

- e856e14: Fix bug with types

## 2.3.0

### Minor Changes

- c28cc2e: useWebApp hook

## 2.2.0

### Minor Changes

- 0339c94: Added `useCloudStorage` that provides `CloudStorage` object as Promise functions
- 1589011: Added useInitData hook

## 2.1.1

### Patch Changes

- 54f5400: Fix smoothButtonsTransition restore state after refresh page

## 2.1.0

### Minor Changes

- bcf3a0e: Added props `disabled` to MainButton component. It is just an alias on the `MainButtonProps.disable`
  Props `disable` marked as deprecated and will be removed

### Patch Changes

- 05d7b34: - Reduced default value for `smoothButtonsTransitionMs`

## 2.0.1

### Patch Changes

- 24545c3: Fix package missed export types

## 2.0.0

### Major Changes

- 4084742: - Have added unnecessary provider `WebAppProvider`
  - Fixed all components to works inside `WebAppProvider`
  - Fix incorrect types `useExpand`
  - Added `smoothButtonsTransition` options to `WebAppProvider`

### Patch Changes

- 3221966: Support dynamic webApp in context
- 5e82b6c: Fix documentation format
- 0bc91cf: Fix structure and types context
- c402a76: Added documentation for WebAppProvider
- 4f18299: Describe all WebApp types
- 111549b: Added jest tests for package and public api

## 1.11.0

### Minor Changes

- af6ccfb: Added useExpand hook, that hook provided isExpanded state, and expand() handle. Remove unsafe_useExpand

## 1.10.1

### Patch Changes

- ef7d3e9: Change readme

## 1.10.0

### Minor Changes

- 8af00e3: Added unsafe_useExpand hook

## 1.9.1

### Patch Changes

- dd8ab05: Update readme

## 1.9.0

### Minor Changes

- 5b1f85f: Added hook useReadTextFromClipboard, that provide function that read text from clipboard
- 2e16b48: Added hook useSwitchInlineQuery

## 1.8.0

### Minor Changes

- 458e93d: Added docs and demo, describes work useScanQrPopup hook

## 1.7.0

### Minor Changes

- c8b49cf: Added useScanQrPopup hook. This hook provide functions showScanQrPopup, closeScanQrPopup

## 1.6.0

### Minor Changes

- 9ed6405: Add useThemeParams hook

## 1.5.4

### Patch Changes

- 5a248e3: Fix .npmignore paths

## 1.5.3

### Patch Changes

- 7a5106c: Fix MainButton uniq effects

## 1.5.2

### Patch Changes

- 2006b71: Add docst and example with useHapticFeedback

## 1.5.1

### Patch Changes

- 92a21c9: Change interfeces

## 1.5.0

### Minor Changes

- dd146bc: Add useHapticFeedback hook

## 1.4.1

### Patch Changes

- 6a7c5b4: Add CRA demo webapp

## 1.4.0

### Minor Changes

- fdbfcc8: Fix window typed error

## 1.3.0

### Minor Changes

- 28c08e4: Add useShowPopup hook

## 1.2.0

### Minor Changes

- b7bfbcb: Add BackButton component

## 1.1.2

### Patch Changes

- 4e36d80: Update documentation

## 1.1.1

### Patch Changes

- 395c91f: Documentation fix

## 1.1.0

### Minor Changes

- 3f5bd48: Changes types, add documentation

## 1.0.3

### Patch Changes

- 81546ee: Add docs pages

## 1.0.2

### Patch Changes

- 6e8043f: Fix ci files, add README and LICENCE

## 1.0.1

### Patch Changes

- ea7807b: Inited project and added MainButton component
