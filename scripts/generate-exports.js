import fs from 'fs';
import path from 'path';

const pkgPath = path.resolve('./package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

const srcDir = path.resolve('./src');
const distDir = './dist';
const components = fs.readdirSync(srcDir).filter((name) => fs.existsSync(path.join(srcDir, name, 'index.ts')));

pkg.exports = {
  '.': {
    types: `${distDir}/index.d.ts`,
    import: `${distDir}/index.js`,
  },
};

pkg.typesVersions = { '*': {} };

for (const name of components) {
  pkg.exports[`./${name}`] = {
    types: `${distDir}/${name}/index.d.ts`,
    import: `${distDir}/${name}/index.js`,
  };
  pkg.typesVersions['*'][name] = [`${distDir}/${name}/index.d.ts`];
}

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log(`✅ package.json exports/typesVersions updated for:`, components);
