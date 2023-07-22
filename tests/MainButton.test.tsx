import * as React from 'react';

import MainButton from '../src/MainButton';
import { useWebApp } from '../src/core';
import { renderComponentTree } from './utils';

describe('MainButton', () => {
  it('checks call show(), hide() WebApp.MainButton api', () => {
    const WebApp = useWebApp();

    renderComponentTree(() => <MainButton />);

    expect(WebApp?.MainButton.show).toBeCalledTimes(1);
    expect(WebApp?.MainButton.hide).toBeCalledTimes(1);
  });

  it('checks correct bind cached onClick', () => {
    const WebApp = useWebApp();
    const handleClick = jest.fn();

    renderComponentTree(() => <MainButton onClick={handleClick} />);

    expect(WebApp?.MainButton.onClick).toBeCalledTimes(1);
    expect(WebApp?.MainButton.offClick).toBeCalledTimes(1);

    expect(WebApp?.MainButton.onClick).toBeCalledWith(handleClick);
    expect(WebApp?.MainButton.offClick).toBeCalledWith(handleClick);
  });

  it('checks correct bind uncached onClick', () => {
    const WebApp = useWebApp();

    renderComponentTree(() => <MainButton onClick={jest.fn()} />);

    expect(WebApp?.MainButton.onClick).toBeCalledTimes(3);
    expect(WebApp?.MainButton.offClick).toBeCalledTimes(3);
  });

  it('checks call showProgress(), hideProgress() WebApp.MainButton api', () => {
    const WebApp = useWebApp();
    const updates = [
      <MainButton progress />,
      <MainButton />,
      <MainButton progress />,
    ];

    renderComponentTree(() => updates.shift() || <MainButton progress />);

    expect(WebApp?.MainButton.showProgress).toBeCalledTimes(2);
    expect(WebApp?.MainButton.hideProgress).toBeCalledTimes(1);
  });

  it('checks call disable(), enable() WebApp.MainButton api', () => {
    const WebApp = useWebApp();
    const updates = [
      <MainButton disable />,
      <MainButton />,
      <MainButton disable />,
    ];

    renderComponentTree(() => updates.shift() || <MainButton disable />);

    expect(WebApp?.MainButton.disable).toBeCalledTimes(2);
    expect(WebApp?.MainButton.enable).toBeCalledTimes(1);
  });

  it('checks call setText() WebApp.MainButton api', () => {
    const WebApp = useWebApp();
    const updates = [
      <MainButton text="Hello" />,
      <MainButton />,
      <MainButton text="My friend" />,
    ];

    renderComponentTree(() => updates.shift() || <MainButton />);

    expect((WebApp?.MainButton.setText as jest.Mock).mock.calls).toEqual([
      ['Hello'],
      ['CONTINUE'],
      ['My friend'],
    ]);
  });

  it('checks textColor props', () => {
    const WebApp = useWebApp();
    const updates = [
      <MainButton textColor="#fff" />,
      <MainButton />,
      <MainButton textColor="#0f0" />,
    ];

    renderComponentTree(() => updates.shift() || <MainButton />);

    expect(WebApp?.MainButton.setParams).toBeCalledWith(
      expect.objectContaining({
        text_color: '#fff',
      }),
    );
    expect(WebApp?.MainButton.setParams).toBeCalledWith(
      expect.objectContaining({
        text_color: '#000',
      }),
    );
    expect(WebApp?.MainButton.setParams).toBeCalledWith(
      expect.objectContaining({
        text_color: '#0f0',
      }),
    );
  });

  it('checks color props', () => {
    const WebApp = useWebApp();
    const updates = [
      <MainButton color="#f0f" />,
      <MainButton />,
      <MainButton color="#0f0" />,
    ];

    renderComponentTree(() => updates.shift() || <MainButton />);

    expect(WebApp?.MainButton.setParams).toBeCalledWith(
      expect.objectContaining({
        color: '#f0f',
      }),
    );
    expect(WebApp?.MainButton.setParams).toBeCalledWith(
      expect.objectContaining({
        color: '#fff',
      }),
    );
    expect(WebApp?.MainButton.setParams).toBeCalledWith(
      expect.objectContaining({
        color: '#0f0',
      }),
    );
  });
});
