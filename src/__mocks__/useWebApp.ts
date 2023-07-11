const WebApp = {
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
  themeParams: {},
};

export default () => WebApp;
