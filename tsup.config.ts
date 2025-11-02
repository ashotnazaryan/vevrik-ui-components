import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/*/index.ts'],
  format: ['cjs', 'esm'],
  dts: false,
  outDir: 'dist',
  clean: true,
  splitting: false,
  sourcemap: false,
});
