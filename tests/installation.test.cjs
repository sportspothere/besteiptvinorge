const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

function dataModule(file) {
  const source = fs.readFileSync(path.join(__dirname, '..', 'lib', file), 'utf8');
  const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const result = { exports: {} };
  new Function('module', 'exports', js)(result, result.exports);
  return result.exports;
}
const catalogue = dataModule('installation.ts');
const { installationGuides } = dataModule('installation-guides.ts');

test('every device lists all seven players and retains its supported specialist apps', () => {
  for (const { id: device } of catalogue.devices) {
    const choices = catalogue.playerChoices(device).map(p => p.id);
    assert.deepEqual(choices.slice(0, 7), ['ibo', 'smartone', 'bob', 'tivimate', 'smarters', 'hot-iptv', 'xciptv']);
    assert.equal(new Set(choices).size, choices.length);
    for (const supported of catalogue.availablePlayers(device)) assert.ok(choices.includes(supported.id));
  }
  assert.equal(catalogue.validSelection('samsung', 'tivimate', 'xtream'), false);
  const message = new URL(catalogue.supportUrl('samsung', 'bob')).searchParams.get('text');
  assert.ok(message.includes('BOB Player'));
  assert.equal(catalogue.validSelection('iphone', 'tivimate', 'xtream'), false);
  assert.deepEqual(catalogue.playerChoices('invalid-device'), []);
});

test('TV-only recipes remain unavailable for mobile or native Tizen/webOS', () => {
  for (const device of ['iphone', 'ipad', 'android-phone', 'android-tablet', 'samsung', 'lg', 'apple-tv']) {
    assert.ok(!catalogue.availablePlayers(device).some(p => p.id === 'tivimate'), device);
  }
  assert.ok(catalogue.availablePlayers('android-tv').some(p => p.id === 'tivimate'));
});
test('unsupported combinations and pending app variants never generate recipes', () => {
  for (const [device, player, method] of [['iphone', 'tivimate', 'xtream'], ['windows', 'vlc', 'xtream'], ['samsung', 'ibo-pro', 'mac'], ['mag', 'mytv3', 'portal'], ['formuler', 'mag-portal', 'portal']]) {
    assert.equal(catalogue.validSelection(device, player, method), false);
    assert.deepEqual(catalogue.installationSteps(device, player, method), []);
  }
});
test('Formuler generations and MAG use different documented interfaces', () => {
  const recipe = (player, device = 'formuler') => catalogue.installationSteps(device, player, 'portal').map(s => s.text).join(' ');
  assert.ok(recipe('mytv2').includes('Menu → Connections'));
  assert.ok(recipe('mytv3').includes('Content Manager → Content Sources'));
  assert.ok(recipe('mytv4').includes('App Settings → Content Sources'));
  assert.ok(recipe('mag-portal', 'mag').includes('Servers → Portals'));
});
test('support URLs carry public selection labels and no account fields', () => {
  const url = new URL(catalogue.supportUrl('windows', 'vlc', 'm3u'));
  assert.equal(url.hostname, 'wa.me');
  assert.deepEqual([...url.searchParams.keys()], ['text']);
  assert.ok(url.searchParams.get('text').includes('Windows PC'));
  assert.ok(!url.searchParams.get('text').includes('password='));
});
test('permanent guides are unique, connected and use valid recipes', () => {
  const slugs = new Set(installationGuides.map(g => g.slug));
  assert.equal(slugs.size, installationGuides.length);
  assert.equal(new Set(installationGuides.map(g => g.description)).size, installationGuides.length);
  for (const guide of installationGuides) {
    for (const related of guide.related) assert.ok(slugs.has(related), related);
    if (guide.setup) assert.ok(catalogue.validSelection(guide.setup.device, guide.setup.player, guide.setup.method), guide.slug);
  }
});
