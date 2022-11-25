import { Button, Form, Input, Typography, Switch } from 'antd';
import { FC, useState } from 'react';
import {
	MainButton,
	MainButtonProps,
} from '@vkruglikov/react-telegram-web-app';

const MainButtonDemo: FC = () => {
	const [buttonState, setButtonState] = useState<
		{
			show: boolean;
		} & Pick<MainButtonProps, 'text' | 'progress' | 'disable'>
	>();
	const onFinish = (values: any) => setButtonState(values);

	return (
		<>
			<Typography.Title level={3}>MainButton</Typography.Title>
			<Form
				labelCol={{ span: 6 }}
				name="basic"
				layout="horizontal"
				initialValues={buttonState}
				onFinish={onFinish}
				autoComplete="off"
			>
				<Form.Item label="Text" name="text">
					<Input />
				</Form.Item>
				<Form.Item name="progress" label="progress" valuePropName="checked">
					<Switch />
				</Form.Item>
				<Form.Item name="disable" label="disable" valuePropName="checked">
					<Switch />
				</Form.Item>
				<Form.Item name="show" label="show" valuePropName="checked">
					<Switch />
				</Form.Item>
				<Form.Item>
					<Button block type="primary" htmlType="submit">
						Apply
					</Button>
				</Form.Item>
			</Form>
			<div>{buttonState?.show && <MainButton {...buttonState} />}</div>
		</>
	);
};
export default MainButtonDemo;
