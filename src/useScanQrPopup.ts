/**
 * If an optional callback parameter was passed, the callback function will be called and the text from the QR
 * code will be passed as the first argument.
 * Returning true inside this callback function causes the popup to be closed.
 */
export type ScanQrPopupCallback = (text: string) => true | void;

/**
 * This object describes the native popup for scanning QR codes.
 * You have to see original interface {@link telegram!ScanQrPopupParams}.
 */
export interface ScanQrPopupParams {
  /**
   * The text to be displayed under the 'Scan QR' heading, 0-64 characters.
   */
  text: string;
}

/**
 * A method that shows a native popup for scanning a QR code described
 * by the params argument of the type {@link ScanQrPopupParams}.
 */
export type ShowScanQrPopupFunction = (
  params: ScanQrPopupParams,
  callback?: ScanQrPopupCallback,
) => void;

/**
 * A method that closes the native popup for scanning a QR code opened with the showScanQrPopup method
 */
export type CloseScanQrPopupFunction = () => void;

const showScanQrPopup: ShowScanQrPopupFunction = (params, callback) => {
  window.Telegram.WebApp.showScanQrPopup(params, callback);
};

const closeScanQrPopup: CloseScanQrPopupFunction = () => {
  window.Telegram.WebApp.closeScanQrPopup();
};

/**
 * The hook provided showScanQrPopup function of the type {@link ShowScanQrPopupFunction} and closeScanQrPopup {@link CloseScanQrPopupFunction}.
 * @group Hooks
 */
const useScanQrPopup = (): readonly [
  ShowScanQrPopupFunction,
  CloseScanQrPopupFunction,
] => [showScanQrPopup, closeScanQrPopup] as const;

export default useScanQrPopup;
