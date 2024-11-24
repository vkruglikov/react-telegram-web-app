export declare namespace TelegramWebApp {
  /**
   * {@link https://core.telegram.org/bots/webapps#themeparams}
   */
  interface ThemeParams {
    bg_color?: string;
    text_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#mainbutton}
   */
  interface MainButton {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    readonly isProgressVisible: boolean;

    setText(text: string): MainButton;

    show(): MainButton;

    hide(): MainButton;

    enable(): MainButton;

    disable(): MainButton;

    showProgress(leaveActive?: boolean): MainButton;

    hideProgress(): MainButton;
    onClick(callback: () => void);

    setParams(params: {
      text?: MainButton['text'];
      color?: MainButton['color'];
      text_color?: MainButton['textColor'];
      is_active?: MainButton['isActive'];
      is_visible?: MainButton['isVisible'];
    }): MainButton;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#webappuser}
   */
  interface WebAppUser {
    id: number;
    is_bot?: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    photo_url?: string;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#webappinitdata}
   */
  interface WebAppInitData {
    query_id?: string;
    user?: WebAppUser;
    receiver?: WebAppUser;
    chat_type?: 'sender' | 'private' | 'group' | 'supergroup' | 'channel';
    chat_instance?: string;
    start_param?: string;
    auth_date: number;
    hash: string;
  }

  interface Event {
    onEvent(
      eventType: 'viewportChanged',
      eventHandler: (payload: { isStateStable: boolean }) => void,
    );

    onEvent(
      eventType: 'themeChanged' | 'mainButtonClicked',
      eventHandler: () => void,
    );

    offEvent(
      eventType: 'viewportChanged' | 'themeChanged' | 'mainButtonClicked',
      eventHandler: (...args: any[]) => void,
    );
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#initializing-web-apps}
   */
  interface WebApp extends Event {
    initData: string;
    initDataUnsafe: WebAppInitData;
    platform: string;
    colorScheme: 'dark' | 'light';
    themeParams: ThemeParams;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    MainButton: MainButton;

    sendData(data: unknown);

    ready();

    expand();

    close();
  }
}
