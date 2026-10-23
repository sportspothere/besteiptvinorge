const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');

const server = spawn(process.execPath, [require.resolve('next/dist/bin/next'), 'start', '--hostname', '127.0.0.1', '--port', '4185'], {
  stdio: 'pipe', windowsHide: true,
});
let output = '';
server.stdout.on('data', data => { output += data; });
server.stderr.on('data', data => { output += data; });
const origin = 'http://127.0.0.1:4185';

(async () => {
  let ready = false;
  for (let attempt = 0; attempt < 80; attempt++) {
    try {
      await fetch(origin, { signal: AbortSignal.timeout(1000) });
      ready = true;
      break;
    } catch {
      if (server.exitCode !== null) break;
      await new Promise(resolve => setTimeout(resolve, 250));
    }
  }
  assert.ok(ready, `Server failed to start: ${output}`);
  for (const [path, status] of [['/', 200], ['/tilbud', 200], ['/no-such-page', 404], ['/.env', 404], ['/.env.local', 404]]) {
    const response = await fetch(origin + path);
    assert.equal(response.status, status, path);
    assert.equal(response.headers.get('x-powered-by'), null, path);
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff', path);
    assert.equal(response.headers.get('x-frame-options'), 'DENY', path);
    assert.equal(response.headers.get('referrer-policy'), 'strict-origin-when-cross-origin', path);
    assert.match(response.headers.get('content-security-policy'), /frame-ancestors 'none'/, path);
    assert.match(response.headers.get('permissions-policy'), /camera=\(\)/, path);
  }
  console.log('PASS: app routes, security headers, 404 responses, and blocked environment-file paths.');
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
}).finally(() => server.kill());
