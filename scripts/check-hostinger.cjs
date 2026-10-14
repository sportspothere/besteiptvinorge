const { spawn } = require('node:child_process');
const assert = require('node:assert/strict');
const server = spawn(process.execPath, [require.resolve('next/dist/bin/next'), 'start', '--hostname', '127.0.0.1', '--port', '4184'], { stdio: 'pipe', windowsHide: true });
let output = '';
server.stdout.on('data', data => { output += data; });
server.stderr.on('data', data => { output += data; });
(async () => {
  let response;
  for (let i = 0; i < 30; i++) {
    try { response = await fetch('http://127.0.0.1:4184/', { signal: AbortSignal.timeout(1000) }); break; }
    catch { if (server.exitCode !== null) break; await new Promise(resolve => setTimeout(resolve, 250)); }
  }
  assert.ok(response, `Next.js server did not start: ${output}`);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Beste IPTV i Norge/);
  assert.match(html, /rel="canonical" href="https:\/\/besteiptvinorge.com\/?"/);
  assert.match(html, /name="robots" content="noindex, follow"/);
  for (const url of ['robots.txt', 'sitemap.xml', 'social-card.png']) assert.equal((await fetch(`http://127.0.0.1:4184/${url}`)).status, 200, url);
  const missing = await fetch('http://127.0.0.1:4184/no-such-page');
  assert.equal(missing.status, 404);
  assert.match(await missing.text(), /Siden finnes ikke/);
  console.log('PASS: Hostinger-style next start serves homepage, domain metadata, crawl files, image and true 404.');
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => { server.kill(); });
