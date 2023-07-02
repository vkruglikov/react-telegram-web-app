import { Button, Form, Typography } from 'antd';
import { FC, useState } from 'react';
import { BackButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';

const BackButtonDemo: FC = () => {
  const [buttonState, setButtonState] = useState<{
    show: boolean;
  }>();
  const showPopup = useShowPopup();

  return (
    <>
      <Typography.Title level={3}>BackButton</Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        name="BackButtonDemo"
        layout="horizontal"
        autoComplete="off"
      >
        <Form.Item>
          <Button
            block
            type="primary"
            onClick={() =>
              setButtonState({
                show: !buttonState?.show,
              })
            }
          >
            {buttonState?.show ? 'Hide BackButton' : 'Show BackButton'}
          </Button>
        </Form.Item>
      </Form>
      <div>
        {buttonState?.show && (
          <BackButton
            onClick={() => {
              showPopup({
                message: 'back button click',
              });
            }}
          />
        )}
      </div>
    </>
  );
};
export default BackButtonDemo;
