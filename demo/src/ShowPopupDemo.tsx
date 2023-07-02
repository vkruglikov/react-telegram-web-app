import { Button, Form, Input, Typography } from 'antd';
import { FC, useState } from 'react';
import {
  ShowPopupParams,
  useShowPopup,
} from '@vkruglikov/react-telegram-web-app';

const ShowPopupDemo: FC = () => {
  const showPopup = useShowPopup();
  const [popupState, setPopupState] = useState<
    Pick<ShowPopupParams, 'title' | 'message'>
  >({
    title: 'title',
    message: 'message',
  });
  const onFinish = (values: any) => {
    setPopupState(values);
    showPopup({
      ...values,
      buttons: [
        {
          type: 'ok',
        },
        {
          type: 'close',
        },
        {
          type: 'destructive',
          text: 'destructive',
        },
      ],
    }).catch(e => {
      showPopup({
        title: 'error',
        message: e,
      });
    });
  };

  return (
    <>
      <Typography.Title level={3}>useShowPopup</Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        name="ShowPopupDemo"
        layout="horizontal"
        initialValues={popupState}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="title" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="message" name="message">
          <Input />
        </Form.Item>
        <Form.Item label="buttons" name="buttons">
          <Typography.Text>
            {JSON.stringify([
              {
                type: 'ok',
              },
              {
                type: 'close',
              },
              {
                type: 'destructive',
                text: 'destructive',
              },
            ])}
          </Typography.Text>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Show popup
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default ShowPopupDemo;
