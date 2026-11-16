const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {createRequire} = require('node:module');

// Exercise the actual landing preservation guard without changing repository files.
const file = path.join(__dirname, 'landing.test.cjs');
const actualRequire = createRequire(file);
const cssFile = path.resolve(__dirname, '../app/globals.css');
for (const addition of ['\nheader { display:none !important; }\n', '\nbody { padding-bottom:0 !important; }\n']) {
  test('the actual preservation guard rejects arbitrary CSS: ' + addition.trim(), () => {
    let guard;
    const interceptedFs = {...fs, readFileSync(name, options) {
      const original = fs.readFileSync(name, options);
      if (path.resolve(String(name)) !== cssFile) return original;
      return typeof original === 'string' ? original + addition : Buffer.concat([original, Buffer.from(addition)]);
    }};
    const localRequire = id => id === 'node:fs' ? interceptedFs : id === 'node:test'
      ? (name, callback) => { if (name.startsWith('préserve exactement')) guard = callback; }
      : actualRequire(id);
    vm.runInNewContext(fs.readFileSync(file, 'utf8'), {
      require: localRequire, __dirname, module: {exports: {}}, Buffer, console,
    }, {filename: file});
    assert.equal(typeof guard, 'function', 'actual preservation callback must be collected');
    assert.throws(guard, /CSS|css/, 'unapproved CSS must fail the real preservation guard');
  });
}
