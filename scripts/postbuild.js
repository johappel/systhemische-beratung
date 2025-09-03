const fs = require('fs');
const path = require('path');

const dist = path.resolve(__dirname, '..', 'dist');
const target = path.join(dist, 'systhemische-beratung');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      // avoid copying the target into itself
      if (entry === 'systhemische-beratung') continue;
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  if (!fs.existsSync(dist)) {
    console.log('dist not found, skipping postbuild copy');
    process.exit(0);
  }
  // ensure clean target
  if (fs.existsSync(target)) {
    // remove target dir
    const rimraf = (p) => {
      if (fs.existsSync(p)) {
        for (const f of fs.readdirSync(p)) {
          const cur = path.join(p, f);
          if (fs.statSync(cur).isDirectory()) rimraf(cur);
          else fs.unlinkSync(cur);
        }
        fs.rmdirSync(p);
      }
    };
    rimraf(target);
  }
  copyRecursive(dist, target);
  console.log('postbuild: copied dist ->', target);
} catch (err) {
  console.error('postbuild failed:', err);
  process.exit(1);
}
