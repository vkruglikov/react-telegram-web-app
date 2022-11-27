export declare namespace TelegramWebApps {
  interface SDK {
    WebApp: WebApp;
  }

  /**
   * Available app events.
   */
  type EventType =
    | 'themeChanged'
    | 'viewportChanged'
    | 'mainButtonClicked'
    | 'backButtonClicked'
    | 'settingsButtonClicked'
    | 'invoiceClosed'
    | 'popupClosed';

  interface WebApp {
    /**
     * A string with raw data transferred to the Web App, convenient for validating data.
     * WARNING: Validate data from this field before using it on the bot's server.
     */
    initData: string;
    /**
     * An object with input data transferred to the Web App.
     * WARNING: Data from this field should not be trusted.
     * You should only use data from initData on the bot's server and only after it has been validated.
     */
    initDataUnsafe: WebAppInitData;
    /**
     * The version of the Bot API available in the user's Telegram app.
     * @since 6.1
     */
    version: string;
    /**
     * The color scheme currently used in the Telegram app. Either “light” or “dark”.
     * Also available as the CSS variable var(--tg-color-scheme).
     */
    colorScheme: 'light' | 'dark';
    /**
     * An object containing the current theme settings used in the Telegram app.
     */
    themeParams: ThemeParams;
    /**
     * True if the Web App is expanded to the maximum available height.
     * False, if the Web App occupies part of the screen and can be expanded to the full height using the expand() method.
     */
    isExpanded: boolean;
    /**
     * The current height of the visible area of the Web App.
     * Also available in CSS as the variable var(--tg-viewport-height).
     */
    viewportHeight: number;
    /**
     * The height of the visible area of the Web App in its last stable state.
     * Also available in CSS as a variable var(--tg-viewport-stable-height).
     */
    viewportStableHeight: number;
    /**
     * Current header color in the #RRGGBB format.
     * @since 6.1
     */
    headerColor: string;
    /**
     * Current background color in the #RRGGBB format.
     * @since 6.1
     */
    backgroundColor: string;
    /**
     * True, if the confirmation dialog is enabled while the user is trying to close the Web App.
     * False, if the confirmation dialog is disabled.
     * @since 6.2
     */
    isClosingConfirmationEnabled: boolean;
    /**
     * An object for controlling the back button which can be displayed in the header of the Web App in the Telegram interface.
     * @since 6.1
     */
    BackButton: BackButton;
    /**
     * An object for controlling the main button, which is displayed at the bottom of the Web App in the Telegram interface.
     */
    MainButton: MainButton;
    /**
     * An object for controlling haptic feedback.
     * @since 6.1
     */
    HapticFeedback: HapticFeedback;
    /**
     * Returns true if the user's app supports a version of the Bot API that is equal to or higher than the version passed as the parameter.
     */
    isVersionAtLeast(version: string): boolean;
    /**
     * A method that sets the app header color.
     * You can only pass Telegram.WebApp.themeParams.bg_color or Telegram.WebApp.themeParams.secondary_bg_color as a color or you can use keywords bg_color, secondary_bg_color instead.
     * @since 6.1
     */
    setHeaderColor(color: string): void;
    /**
     * A method that sets the app background color in the #RRGGBB format or you can use keywords bg_color, secondary_bg_color instead.
     * @since 6.1
     */
    setBackgroundColor(color: string): void;
    /**
     * A method that enables a confirmation dialog while the user is trying to close the Web App.
     * @since 6.2
     */
    enableClosingConfirmation(): void;
    /**
     * A method that disables the confirmation dialog while the user is trying to close the Web App.
     * @since 6.2
     */
    disableClosingConfirmation(): void;
    /**
     * A method that sets the app event handler.
     */
    onEvent(eventType: EventType, eventHandler: Function): void;
    /**
     * 	A method that deletes a previously set event handler.
     */
    offEvent(eventType: EventType, eventHandler: Function): void;
    /**
     * A method used to send data to the bot.
     */
    sendData(data: any): void;
    /**
     * A method that opens a link in an external browser.
     * The Web App will not be closed.
     * Note that this method can be called only in response to the user interaction with the Web App interface (e.g. click inside the Web App or on the main button)
     */
    openLink(url: string): void;
    /**
     * A method that opens a telegram link inside Telegram app.
     * The Web App will be closed.
     */
    openTelegramLink(url: string): void;
    /**
     * A method that opens an invoice using the link url.
     * The Web App will receive the event invoiceClosed when the invoice is closed.
     * If an optional callback parameter was passed, the callback function will be called and the invoice status will be passed as the first argument.
     * @since 6.1
     */
    openInvoice(url: string, callback?: Function): void;
    /**
     * A method that shows a native popup described by the params argument of the type PopupParams.
     * The Web App will receive the event popupClosed when the popup is closed.
     * If an optional callback parameter was passed, the callback function will be called and the field id of the pressed button will be passed as the first argument.
     * @since 6.2
     */
    showPopup(params: PopupParams, callback?: Function): void;
    /**
     * A method that shows message in a simple alert with a 'Close' button.
     * If an optional callback parameter was passed, the callback function will be called when the popup is closed.
     * @since 6.2
     */
    showAlert(message: string, callback?: Function): void;
    /**
     * A method that shows message in a simple confirmation window with 'OK' and 'Cancel' buttons.
     * If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user pressed the 'OK' button.
     * @since 6.2
     */
    showConfirm(message: string, callback?: Function): void;
    /**
     * A method that informs the Telegram app that the Web App is ready to be displayed.
     */
    ready(): void;
    /**
     * A method that expands the Web App to the maximum available height.
     */
    expand(): void;
    /**
     * A method that closes the Web App.
     */
    close(): void;
  }

  interface ThemeParams {
    /**
     * Background color in the #RRGGBB format.
     * Also available as the CSS variable var(--tg-theme-bg-color).
     */
    bg_color?: string;
    /**
     * Main text color in the #RRGGBB format.
     * Also available as the CSS variable var(--tg-theme-text-color).
     */
    text_color?: string;
    /**
     * Hint text color in the #RRGGBB format.
     * Also available as the CSS variable var(--tg-theme-hint-color).
     */
    hint_color?: string;
    /**
     * Link color in the #RRGGBB format.
     * Also available as the CSS variable var(--tg-theme-link-color).
     */
    link_color?: string;
    /**
     * Button color in the #RRGGBB format.
     * Also available as the CSS variable var(--tg-theme-button-color).
     */
    button_color?: string;
    /**
     * Button text color in the #RRGGBB format.
     * Also available as the CSS variable var(--tg-theme-button-text-color).
     */
    button_text_color?: string;
    /**
     * Secondary background color in the #RRGGBB format.
     * Also available as the CSS variable var(--tg-theme-secondary-bg-color).
     * @since 6.1
     */
    secondary_bg_color?: string;
  }

  interface PopupParams {
    /**
     * Optional. The text to be displayed in the popup title, 0-64 characters.
     */
    title?: string;
    /**
     * The message to be displayed in the body of the popup, 1-256 characters.
     */
    message: string;
    /**
     * Optional. List of buttons to be displayed in the popup, 1-3 buttons. Set to [{“type”:“close”}] by default.
     */
    buttons?: PopupButton[];
  }

  interface PopupButton {
    /**
     * Optional. Identifier of the button, 0-64 characters.
     * Set to empty string by default.
     * If the button is pressed, its id is returned in the callback and the popupClosed event.
     */
    id?: string;
    /**
     * Optional. Type of the button.
     * Set to default by default.
     *
     * Can be one of these values:
     * - default, a button with the default style,
     * - ok, a button with the localized text “OK”,
     * - close, a button with the localized text “Close”,
     * - cancel, a button with the localized text “Cancel”,
     * - destructive, a button with a style that indicates a destructive action (e.g. “Remove”, “Delete”, etc.).
     */
    type?: string;
    /**
     * Optional. The text to be displayed on the button, 0-64 characters.
     * Required if type is default or destructive.
     * Irrelevant for other types.
     */
    text?: string;
  }

  interface WebAppInitData {
    /**
     * A unique identifier for the Web App session, required for sending messages via the answerWebAppQuery method.
     */
    query_id?: string;
    /**
     * An object containing data about the current user.
     */
    user?: WebAppUser;
    /**
     * An object containing data about the chat partner of the current user in the chat where the bot was launched via the attachment menu.
     * Returned only for Web Apps launched via the attachment menu.
     */
    receiver?: WebAppUser;
    /**
     * An object containing data about the chat where the bot was launched via the attachment menu.
     * Returned for supergroups, channels and group chats – only for Web Apps launched via the attachment menu.
     */
    chat?: WebAppChat;
    /**
     * The value of the startattach parameter, passed via link.
     * Only returned for Web Apps when launched from the attachment menu via link.
     */
    start_param?: string;
    /**
     * Time in seconds, after which a message can be sent via the answerWebAppQuery method.
     */
    can_send_after?: number;
    /**
     * Unix time when the form was opened.
     */
    auth_date?: number;
    /**
     * A hash of all passed parameters, which the bot server can use to check their validity.
     */
    hash?: string;
  }

  interface WebAppUser {
    /**
     * A unique identifier for the user or bot.
     */
    id?: number;
    /**
     * True, if this user is a bot. Returns in the receiver field only.
     */
    is_bot: boolean;
    /**
     * First name of the user or bot.
     */
    first_name: string;
    /**
     * Last name of the user or bot.
     */
    last_name?: string;
    /**
     * Username of the user or bot.
     */
    usernames?: string;
    /**
     * IETF language tag of the user's language. Returns in user field only.
     */
    language_code?: string;
    /**
     * True, if this user is a Telegram Premium user.
     * @since 6.2
     */
    is_premium?: boolean;
    /**
     * URL of the user’s profile photo. The photo can be in .jpeg or .svg formats. Only returned for Web Apps launched from the attachment menu.
     */
    photo_url?: string;
  }

  interface WebAppChat {
    /**
     * Unique identifier for this chat.
     * This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it.
     * But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
     */
    id: number;
    /**
     * Type of chat, can be either “group”, “supergroup” or “channel”
     */
    type: WebAppChatType;
    /**
     * Title of the chat
     */
    title: string;
    /**
     * Username of the chat
     */
    username?: string;
    /**
     * URL of the chat’s photo.
     * The photo can be in .jpeg or .svg formats.
     * Only returned for Web Apps launched from the attachment menu.
     */
    photo_url?: string;
  }

  type WebAppChatType = 'group' | 'supergroup' | 'channel';

  interface BackButton {
    /**
     * Shows whether the button is visible.
     * Set to false by default.
     * @since 6.1
     */
    isVisible: boolean;
    /**
     * A method that sets the button press event handler.
     * An alias for Telegram.WebApp.onEvent('backButtonClicked', callback)
     * @since 6.1
     */
    onClick(callback: Function): BackButton;
    /**
     * A method that removes the button press event handler.
     * An alias for Telegram.WebApp.offEvent('backButtonClicked', callback)
     * @since 6.1
     */
    offClick(callback: Function): BackButton;
    /**
     * A method to make the button active and visible.
     * @since 6.1
     */
    show(): BackButton;
    /**
     * A method to hide the button.
     * @since 6.1
     */
    hide(): BackButton;
  }

  interface MainButton {
    /**
     * Current button text. Set to CONTINUE by default.
     */
    text: string;
    /**
     * 	Current button color. Set to themeParams.button_color by default.
     */
    color: string;
    /**
     * Current button text color. Set to themeParams.button_text_color by default.
     */
    textColor: string;
    /**
     * Shows whether the button is visible. Set to false by default.
     */
    isVisible: boolean;
    /**
     * Shows whether the button is active. Set to true by default.
     */
    isActive: boolean;
    /**
     * Readonly. Shows whether the button is displaying a loading indicator.
     */
    isProgressVisible: boolean;
    /**
     * A method to set the button text.
     */
    setText(text: string): MainButton;
    /**
     * A method that sets the button press event handler.
     * An alias for Telegram.WebApp.onEvent('mainButtonClicked', callback)
     */
    onClick(callback: Function): MainButton;
    /**
     * A method that removes the button press event handler.
     * An alias for Telegram.WebApp.offEvent('mainButtonClicked', callback)
     */
    offClick(callback: Function): MainButton;
    /**
     * A method to make the button visible.
     */
    show(): MainButton;
    /**
     * A method to hide the button.
     */
    hide(): MainButton;
    /**
     * A method to enable the button.
     */
    enable(): MainButton;
    /**
     * A method to disable the button.
     */
    disable(): MainButton;
    /**
     * A method to show a loading indicator on the button.
     */
    showProgress(leaveActive: boolean): MainButton;
    /**
     * A method to hide the loading indicator.
     */
    hideProgress(): MainButton;
    /**
     * A method to set the button parameters.
     */
    setParams(params: MainButtonParams): MainButton;
  }

  interface MainButtonParams {
    /**
     * Button text.
     */
    text?: string;
    /**
     * Button color.
     */
    color?: string;
    /**
     * Button text color.
     */
    text_color?: string;
    /**
     * Enable the button.
     */
    is_active?: boolean;
    /**
     * Show the button.
     */
    is_visible?: boolean;
  }

  interface HapticFeedback {
    /**
     * A method tells that an impact occurred.
     * @since 6.1
     */
    impactOccurred(style: HapticFeedbackImpactStyle): HapticFeedback;
    /**
     * A method tells that a task or action has succeeded, failed, or produced a warning.
     * @since 6.1
     */
    notificationOccurred(type: HapticFeedbackNotificationType): HapticFeedback;
    /**
     * A method tells that the user has changed a selection.
     * The Telegram app may play the appropriate haptics.
     * Do not use this feedback when the user makes or confirms a selection; use it only when the selection changes.
     * @since 6.1
     */
    selectionChanged(): HapticFeedback;
  }

  /**
   * The Telegram app may play the appropriate haptics based on style value passed.
   * Style can be one of these values:
   * - light, indicates a collision between small or lightweight UI objects,
   * - medium, indicates a collision between medium-sized or medium-weight UI objects,
   * - heavy, indicates a collision between large or heavyweight UI objects,
   * - rigid, indicates a collision between hard or inflexible UI objects,
   * - soft, indicates a collision between soft or flexible UI objects.
   * @since 6.1
   */
  type HapticFeedbackImpactStyle =
    | 'light'
    | 'medium'
    | 'heavy'
    | 'rigid'
    | 'soft';

  /**
   * The Telegram app may play the appropriate haptics based on type value passed.
   * Type can be one of these values:
   * - error, indicates that a task or action has failed,
   * - success, indicates that a task or action has completed successfully,
   * - warning, indicates that a task or action produced a warning.
   * @since 6.1
   */
  type HapticFeedbackNotificationType = 'error' | 'success' | 'warning';
}

declare global {
  const Telegram: TelegramWebApps.SDK;

  interface Window {
    Telegram: TelegramWebApps.SDK;
  }
}
