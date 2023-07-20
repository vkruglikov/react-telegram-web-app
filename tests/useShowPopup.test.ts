import { renderHook } from '@testing-library/react';
import useShowPopup from '../src/useShowPopup';
import useWebApp from '../src/useWebApp';

jest.mock('../src/useWebApp');

describe('useShowPopup', () => {
  it('checks correct call WebApp.showPopup api', async () => {
    const { result } = renderHook(useShowPopup);
    const showPopup = result.current;

    (useWebApp()?.showPopup as jest.Mock).mockImplementation((_, resolve) => {
      resolve('buttonId');
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

    expect(useWebApp()?.showPopup as jest.Mock).toBeCalledWith(
      params,
      expect.any(Function),
    );
    expect(button).toBe('buttonId');
  });
});
