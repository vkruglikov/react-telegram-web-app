import * as React from 'react';

import BackButton from '../src/BackButton';
import { useWebApp } from '../src/core';
import { renderComponentTree } from './utils';

describe('BackButton', () => {
  it('checks call show(), hide() WebApp.BackButton api', () => {
    const WebApp = useWebApp();

    renderComponentTree(() => <BackButton />);

    expect(WebApp?.BackButton?.show).toBeCalledTimes(1);
    expect(WebApp?.BackButton?.hide).toBeCalledTimes(1);
  });

  it('checks correct bind cached onClick', () => {
    const WebApp = useWebApp();
    const handleClick = jest.fn();

    renderComponentTree(() => <BackButton onClick={handleClick} />);

    expect(WebApp?.BackButton?.onClick).toBeCalledTimes(1);
    expect(WebApp?.BackButton?.offClick).toBeCalledTimes(1);

    expect(WebApp?.BackButton?.onClick).toBeCalledWith(handleClick);
    expect(WebApp?.BackButton?.offClick).toBeCalledWith(handleClick);
  });

  it('checks correct bind uncached onClick', () => {
    const WebApp = useWebApp();

    renderComponentTree(() => <BackButton onClick={jest.fn()} />);

    expect(WebApp?.BackButton?.onClick).toBeCalledTimes(3);
    expect(WebApp?.BackButton?.offClick).toBeCalledTimes(3);
  });
});
