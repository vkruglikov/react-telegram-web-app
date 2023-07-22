import * as fsAsync from 'fs/promises';
import * as fs from 'fs';
import * as path from 'path';

const BUILD_PATH = path.resolve(__dirname, '../lib');
const COMMON_JS_MODULE = 'react-telegram-web-app.cjs';

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

describe('Package /lib', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should have correct /lib structure', async () => {
    expect(await walk(BUILD_PATH)).toMatchSnapshot();
  });

  it('should have exports from modules', () => {
    const indexModule = require(path.join(BUILD_PATH, COMMON_JS_MODULE));

    expect(indexModule).toMatchSnapshot();
  });
});

describe('Public API documentation', () => {
  it('should have describe in README.md', () => {
    const indexModule = Object.keys(
      require(path.join(BUILD_PATH, COMMON_JS_MODULE)),
    );

    const mdFile = fs.readFileSync(
      path.resolve(__dirname, '../README.md'),
      'utf8',
    );

    expect(
      indexModule
        .map(name => `[${name}](./docs/README.md#${name.toLowerCase()})`)
        .filter(name => !mdFile.includes(name)),
    ).toStrictEqual([]);
  });
});
