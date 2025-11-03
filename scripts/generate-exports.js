import fs from 'fs';
import path from 'path';

const pkgPath = path.resolve('./package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

const srcDir = path.resolve('./src');
const distDir = './dist';

// Find all subfolders in src that contain an index.ts
const components = fs.readdirSync(srcDir).filter((name) => fs.existsSync(path.join(srcDir, name, 'index.ts')));

pkg.exports = {
  '.': {
    types: `${distDir}/index.d.ts`,
    import: `${distDir}/index.js`,
    require: `${distDir}/index.cjs`,
  },
};

pkg.typesVersions = { '*': {} };

for (const name of components) {
  pkg.exports[`./${name}`] = {
    types: `${distDir}/${name}/index.d.ts`,
    import: `${distDir}/${name}/index.js`,
    require: `${distDir}/${name}/index.cjs`,
  };
  pkg.typesVersions['*'][name] = [`${distDir}/${name}/index.d.ts`];
}

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log(`✅ package.json exports/typesVersions updated for:`, components);
