# Ngx-Socket-IO

> ⚠️ This repository demonstrates an issue and is not meant to be used.

## Steps for reproduction

```bash
git clone https://github.com/GregOnNet/ngx-socket-io-jest-issue.git
cd ngx-socket-io-jest-issue
npm intall
npm test
```

### Expected Error

```bash
$ jest
 FAIL  src/app/consumer.service.spec.ts
  ● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    /Users/gregor/workbench/scratch/angular/ngx-socket-io-playground/node_modules/ngx-socket-io/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){export { SocketIoModule } from './src/socket-io.module';
                                                                                             ^^^^^^

    SyntaxError: Unexpected token export

      1 | import { Injectable } from '@angular/core';
    > 2 | import { Socket } from 'ngx-socket-io';
        | ^
      3 |
      4 | @Injectable({
      5 |   providedIn: 'root'

      at ScriptTransformer._transformAndBuildScript (node_modules/jest-runtime/build/ScriptTransformer.js:440:17)
      at Object.<anonymous> (src/app/consumer.service.ts:2:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.683s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
