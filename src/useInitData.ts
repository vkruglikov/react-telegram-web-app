import { useWebApp } from './core';

/**
 * {@link telegram!WebAppChat}
 */
export type WebAppChat = {
  id: number;
  type: 'group' | 'supergroup' | 'channel';
  title: string;
  username?: string;
  photo_url?: string;
};

/**
 * {@link telegram!WebAppUser}
 */
export type WebAppUser = {
  id: number;
  is_bot?: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  photo_url?: string;
  is_premium?: boolean;
  added_to_attachment_menu?: true;
  allows_write_to_pm?: true;
};

export type InitData = string;

/**
 * {@link telegram!WebAppInitData}
 */
export type InitDataUnsafe = {
  query_id?: string;
  user?: WebAppUser;
  receiver?: WebAppUser;
  chat_type?: 'sender' | 'private' | 'group' | 'supergroup' | 'channel';
  chat_instance?: string;
  start_param?: string;
  auth_date: number;
  hash: string;
  chat?: WebAppChat;
  can_send_after?: number;
};

/**
 * This hook provides `initDataUnsafe` and `initData`
 * You have to look original description in {@link telegram!WebApp}, because hook just return this.
 *
 * ```tsx
 * import { useInitData } from "@vkruglikov/react-telegram-web-app";
 *
 * const [initDataUnsafe] = useInitData();
 * const [initDataUnsafe, initData] = useInitData();
 *
 * ```
 * @group Hooks
 */
const useInitData = (): readonly [
  InitDataUnsafe | undefined,
  InitData | undefined,
] => {
  const WebApp = useWebApp();

  return [WebApp?.initDataUnsafe, WebApp?.initData] as const;
};

export default useInitData;
