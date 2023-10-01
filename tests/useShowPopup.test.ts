import { renderHook } from '@testing-library/react';
import useShowPopup from '../src/useShowPopup';
import { useWebApp } from '../src/core';
import { WebApp } from '../src/core/twa-types';

describe('useShowPopup', () => {
  it('checks correct call WebApp.showPopup api', async () => {
    const { result } = renderHook(useShowPopup);
    const showPopup = result.current;

    const spyShowPopup = jest
      .spyOn(useWebApp() as WebApp, 'showPopup')
      .mockImplementation((_, callback) => {
        callback!('buttonId');
      });

    const params = {
      title: 'title',
      message: 'message',
      buttons: [
        {
          id: 'buttonId',
          type: 'cancel',
          text: 'textButton',
        },
      ],
    };
    const button = await showPopup(params);

    expect(spyShowPopup).toBeCalledWith(params, expect.any(Function));
    expect(button).toBe('buttonId');
  });
});
