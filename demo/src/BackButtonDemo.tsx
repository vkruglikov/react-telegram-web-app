import { Button, Form, Typography, Switch } from 'antd';
import { FC, useState } from 'react';
import { BackButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';

const BackButtonDemo: FC = () => {
  const [buttonState, setButtonState] = useState<{
    show: boolean;
  }>();
  const onFinish = (values: any) => setButtonState(values);
  const showPopup = useShowPopup();

  return (
    <>
      <Typography.Title level={3}>BackButton</Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        name="basic"
        layout="horizontal"
        initialValues={buttonState}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item name="show" label="show" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Apply
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
