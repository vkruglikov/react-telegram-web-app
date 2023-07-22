import * as React from 'react';
import { ReactTestRenderer } from 'react-test-renderer';
import * as renderer from 'react-test-renderer';

export const renderComponentTree = (fabric: () => React.ReactElement) => {
  let tree: ReactTestRenderer | undefined = undefined;

  renderer.act(() => {
    tree = renderer.create(fabric());
  });
  renderer.act(() => {
    tree!.update(fabric());
  });
  renderer.act(() => {
    tree!.update(fabric());
  });
  renderer.act(() => {
    tree!.unmount();
  });

  return tree as unknown as ReactTestRenderer;
};
