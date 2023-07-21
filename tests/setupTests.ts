jest.mock(
  '../src/core/useWebApp',
  () => require('./__mocks__/useWebApp').default,
);

global.beforeEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
});
