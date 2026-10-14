const { spawnSync } = require('node:child_process');
const result = spawnSync(process.execPath, [require.resolve('next/dist/bin/next'), 'build', '--webpack'], {
  stdio: 'inherit',
  env: { ...process.env, STATIC_EXPORT: 'true' },
});
if (result.error) { console.error(result.error); process.exit(1); }
process.exit(result.status ?? 1);
