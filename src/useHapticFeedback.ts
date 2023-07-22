import { useWebApp } from './core';
import { useCallback } from 'react';

/**
 * A method tells that an impact occurred. The Telegram app may play the appropriate haptics based on style value passed. Style can be one of these values:
 * - light, indicates a collision between small or lightweight UI objects,
 * - medium, indicates a collision between medium-sized or medium-weight UI objects,
 * - heavy, indicates a collision between large or heavyweight UI objects,
 * - rigid, indicates a collision between hard or inflexible UI objects,
 * - soft, indicates a collision between soft or flexible UI objects.
 * {@link telegram!HapticFeedback}
 */
export type ImpactOccurredFunction = (
  style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft',
) => void;

/**
 * A method tells that a task or action has succeeded, failed, or produced a warning. The Telegram app may play the appropriate haptics based on type value passed. Type can be one of these values:
 * - error, indicates that a task or action has failed,
 * - success, indicates that a task or action has completed successfully,
 * - warning, indicates that a task or action produced a warning.
 * {@link telegram!HapticFeedback}
 */
export type NotificationOccurredFunction = (
  type: 'error' | 'success' | 'warning',
) => void;

/**
 * A method tells that the user has changed a selection. The Telegram app may play the appropriate haptics.
 * {@link telegram!HapticFeedback}
 */
export type SelectionChangedFunction = () => void;

/**
 * This hook that provided {@link ImpactOccurredFunction}, {@link NotificationOccurredFunction} and {@link SelectionChangedFunction} functions that controls haptic feedback.
 * You have to look original telegram description {@link telegram!HapticFeedback}, because it Hook implementing his.
 *
 * ```tsx
 * import { useHapticFeedback } from "@vkruglikov/react-telegram-web-app";
 *
 * const [impactOccurred, notificationOccurred, selectionChanged] =
 *     useHapticFeedback();
 * // const [,notificationOccurred] = useHapticFeedback();
 *
 * impactOccurred('heavy');
 * notificationOccurred('success');
 * ```
 *
 * @group Hooks
 */
const useHapticFeedback = (): readonly [
  ImpactOccurredFunction,
  NotificationOccurredFunction,
  SelectionChangedFunction,
] => {
  const WebApp = useWebApp();
  const HapticFeedback = WebApp?.HapticFeedback;

  const impactOccurred: ImpactOccurredFunction = useCallback(
    (...args) => HapticFeedback?.impactOccurred(...args),
    [HapticFeedback],
  );
  const notificationOccurred: NotificationOccurredFunction = useCallback(
    (...args) => HapticFeedback?.notificationOccurred(...args),
    [HapticFeedback],
  );
  const selectionChanged: SelectionChangedFunction = useCallback(
    (...args) => HapticFeedback?.selectionChanged(...args),
    [HapticFeedback],
  );

  return [impactOccurred, notificationOccurred, selectionChanged] as const;
};

export default useHapticFeedback;
