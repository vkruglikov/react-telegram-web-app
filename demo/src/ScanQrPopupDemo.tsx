import { Button, Form, Typography } from 'antd';
import {
  useScanQrPopup,
  useShowPopup,
} from '@vkruglikov/react-telegram-web-app';

const ScanQrPopupDemo = () => {
  const [showQrPopup, closeQrPopup] = useScanQrPopup();
  const showPopup = useShowPopup();

  return (
    <>
      <Typography.Title level={3}>useScanQrPopup</Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        name="ScanQrPopupDemo"
        layout="horizontal"
        autoComplete="off"
      >
        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="button"
            onClick={() =>
              showQrPopup(
                {
                  text: 'Привет друг',
                },
                text => {
                  closeQrPopup();
                  showPopup({
                    message: text,
                  });
                },
              )
            }
          >
            showScanQrPopup
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ScanQrPopupDemo;
