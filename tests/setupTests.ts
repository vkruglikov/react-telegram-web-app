jest.mock(
  '../src/core/useWebApp',
  () => require('./core/__mocks__/useWebApp').default,
);

global.beforeEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
});
