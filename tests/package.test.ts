import * as fs from 'fs';
import * as path from 'path';

const BUILD_PATH = path.resolve(__dirname, '../lib');

const COMMON_JS_MODULE = 'react-telegram-web-app.cjs';

const REQUIRED_MODULES = [
  COMMON_JS_MODULE,
  'react-telegram-web-app.module.js',
  'react-telegram-web-app.modern.js',
  'react-telegram-web-app.umd.js',
] as const;

const REQUIRED_EXPORTS = [
  'WebAppProvider',
  'MainButton',
  'BackButton',
  'useShowPopup',
  'useHapticFeedback',
  'useThemeParams',
  'useScanQrPopup',
  'useReadTextFromClipboard',
  'useSwitchInlineQuery',
  'useExpand',
];

const REQUIRED_DTS = [
  ...REQUIRED_EXPORTS.map(name => `${name}.d.ts`),
  'useWebApp.d.ts',
  'context.d.ts',
  'index.d.ts',
];

describe('Public API modules', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('checks exist lib modules', () => {
    expect(
      [
        ...REQUIRED_MODULES,
        ...REQUIRED_MODULES.map(module => module + '.map'),
      ].filter(module => !fs.existsSync(path.join(BUILD_PATH, module))),
    ).toStrictEqual([]);
  });

  it('checks exist declaration types', () => {
    expect(
      REQUIRED_DTS.filter(
        module => !fs.existsSync(path.join(BUILD_PATH, module)),
      ),
    ).toStrictEqual([]);
  });

  it('checks export from modules', () => {
    const indexModule = require(path.join(BUILD_PATH, COMMON_JS_MODULE));

    expect(indexModule).toMatchObject(
      REQUIRED_EXPORTS.reduce((memo, name) => {
        memo[name] = expect.any(Function);
        return memo;
      }, {} as Record<string, any>),
    );
  });
});

describe('Public API documentation', () => {
  it('checks contain describe in README.md', () => {
    const mdFile = fs.readFileSync(
      path.resolve(__dirname, '../README.md'),
      'utf8',
    );

    expect(
      REQUIRED_EXPORTS.map(
        name => `[${name}](./docs/README.md#${name.toLowerCase()})`,
      ).filter(name => !mdFile.includes(name)),
    ).toStrictEqual([]);
  });
});
