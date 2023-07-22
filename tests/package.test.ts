import * as fsAsync from 'fs/promises';
import * as fs from 'fs';
import * as path from 'path';

const BUILD_PATH = path.resolve(__dirname, '../lib');

const walk = async (dirPath: string): Promise<any> =>
  Promise.all(
    await fsAsync.readdir(dirPath, { withFileTypes: true }).then(entries =>
      entries.map(entry => {
        const childPath = path.join(dirPath, entry.name);
        return entry.isDirectory()
          ? walk(childPath)
          : childPath.replace(BUILD_PATH, '');
      }),
    ),
  );

const COMMON_JS_MODULE = 'react-telegram-web-app.cjs';

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

describe('package tests', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('checks /lib structure', async () => {
    expect(await walk(BUILD_PATH)).toMatchSnapshot();
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
