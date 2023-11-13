import { useWebApp as _useWebApp } from './core';

/**
 * This hook just provides native {@link telegram!WebApp} object
 *
 * ```tsx
 * import { useWebApp } from "@altiore/twa";
 *
 * const WebApp = useWebApp();
 *
 * console.log(WebApp.version);
 * ```
 * @group Hooks
 */
// const useWebApp = () => _useWebApp() as () => any;

export default _useWebApp;
