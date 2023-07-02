import { Button, Form, Typography, Select } from 'antd';
import { FC, useState } from 'react';
import {
  ImpactOccurredFunction,
  NotificationOccurredFunction,
  useHapticFeedback,
} from '@vkruglikov/react-telegram-web-app';

const HapticFeedbackDemo: FC = () => {
  const [impactOccurred, notificationOccurred, selectionChanged] =
    useHapticFeedback();
  const [style, setStyle] =
    useState<Parameters<ImpactOccurredFunction>[0]>('light');
  const [type, setType] =
    useState<Parameters<NotificationOccurredFunction>[0]>('error');

  return (
    <>
      <Typography.Title level={3}>useHapticFeedback</Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        name="HapticFeedbackDemo"
        layout="horizontal"
        autoComplete="off"
      >
        <Form.Item label="style">
          <Select value={style} onChange={value => setStyle(value)}>
            <Select.Option value="light">light</Select.Option>
            <Select.Option value="medium">medium</Select.Option>
            <Select.Option value="heavy">heavy</Select.Option>
            <Select.Option value="rigid">rigid</Select.Option>
            <Select.Option value="soft">soft</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" onClick={() => impactOccurred(style)}>
            impactOccurred
          </Button>
        </Form.Item>
        <Form.Item label="type">
          <Select value={type} onChange={value => setType(value)}>
            <Select.Option value="error">error</Select.Option>
            <Select.Option value="success">success</Select.Option>
            <Select.Option value="warning">warning</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            block
            type="primary"
            onClick={() => notificationOccurred(type)}
          >
            notificationOccurred
          </Button>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" onClick={() => selectionChanged()}>
            selectionChanged
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default HapticFeedbackDemo;
