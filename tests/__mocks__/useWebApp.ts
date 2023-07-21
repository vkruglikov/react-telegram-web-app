const instance = {
  BackButton: {
    show: jest.fn(),
    hide: jest.fn(),
    onClick: jest.fn(),
    offClick: jest.fn(),
  },
  MainButton: {
    show: jest.fn(),
    hide: jest.fn(),
    setParams: jest.fn(),
    setText: jest.fn(),
    disable: jest.fn(),
    enable: jest.fn(),
    onClick: jest.fn(),
    offClick: jest.fn(),
    showProgress: jest.fn(),
    hideProgress: jest.fn(),
  },
  HapticFeedback: {
    impactOccurred: jest.fn(),
    selectionChanged: jest.fn(),
    notificationOccurred: jest.fn(),
  },
  themeParams: {},
  onEvent: jest.fn(),
  offEvent: jest.fn(),
  isExpanded: undefined,
  expand: jest.fn(),
  readTextFromClipboard: jest.fn(),
  showScanQrPopup: jest.fn(),
  closeScanQrPopup: jest.fn(),
  showPopup: jest.fn(),
  switchInlineQuery: jest.fn(),
  colorScheme: undefined,
};

export default () => instance;
