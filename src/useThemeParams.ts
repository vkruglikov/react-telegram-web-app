import { useEffect, useState } from 'react';
import { useWebApp } from './core';

/**
 * This object contains the user's current theme settings.
 * This object implement original Telegram WebApp type of {@link telegram!ThemeParams}
 */
export interface ThemeParams {
  /**
   * Background color in the #RRGGBB format.
   */
  bg_color?: string;
  /**
   * Main text color in the #RRGGBB format.
   */
  text_color?: string;
  /**
   * Hint text color in the #RRGGBB format.
   */
  hint_color?: string;
  /**
   * Link color in the #RRGGBB format.
   */
  link_color?: string;
  /**
   * Button color in the #RRGGBB format.
   */
  button_color?: string;
  /**
   * Button text color in the #RRGGBB format.
   */
  button_text_color?: string;
  /**
   * Secondary background color in the #RRGGBB format.
   */
  secondary_bg_color?: string;
}

/**
 * The color scheme currently used in the Telegram app. Either “light” or “dark”.
 * Can `undefined`, if `window` is undefined.
 */
export type ColorScheme = 'light' | 'dark' | undefined;

/**
 * The hook provided colorScheme and themeParams values of the type {@link ColorScheme} and {@link ThemeParams}.
 *
 * ```tsx
 * import { useThemeParams } from "@vkruglikov/react-telegram-web-app";
 *
 * const [colorScheme, themeParams] = useThemeParams();
 *
 * console.log(colorScheme === 'dark');
 * console.log({
 *     text_color: themeParams.text_color,
 *     button_color: themeParams.button_color,
 *     bg_color: themeParams.bg_color,
 * });
 * ```
 * @group Hooks
 */
const useThemeParams: () => readonly [ColorScheme, ThemeParams] = () => {
  const WebApp = useWebApp();
  const [colorScheme, setColor] = useState<ColorScheme>(WebApp?.colorScheme);
  const [themeParams, setThemeParams] = useState<ThemeParams>(
    WebApp?.themeParams || {},
  );

  useEffect(() => {
    if (!WebApp) return;
    const eventHandler = () => {
      setColor(WebApp.colorScheme);
      setThemeParams(WebApp.themeParams);
    };

    WebApp.onEvent('themeChanged', eventHandler);
    return () => {
      WebApp.offEvent('themeChanged', eventHandler);
    };
  }, [WebApp]);

  return [colorScheme, themeParams] as const;
};

export default useThemeParams;
