import { useEffect, useState } from 'react';

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
 * @group Hooks
 */
const useThemeParams: () => readonly [ColorScheme, ThemeParams] = () => {
  const [colorScheme, setColor] = useState<ColorScheme>(
    typeof window !== 'undefined'
      ? window.Telegram.WebApp.colorScheme
      : undefined,
  );
  const [themeParams, setThemeParams] = useState<ThemeParams>(
    typeof window !== 'undefined' ? window.Telegram.WebApp.themeParams : {},
  );

  useEffect(() => {
    const eventHandler = () => {
      setColor(window.Telegram.WebApp.colorScheme);
      setThemeParams(window.Telegram.WebApp.themeParams);
    };

    window.Telegram.WebApp.onEvent('themeChanged', eventHandler);
    return () => {
      window.Telegram.WebApp.offEvent('themeChanged', eventHandler);
    };
  }, []);

  return [colorScheme, themeParams] as const;
};

export default useThemeParams;
