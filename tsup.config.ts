import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'CircularLoader/index': 'src/CircularLoader/index.ts',
    'CopyToClipboard/index': 'src/CopyToClipboard/index.ts',
    'Details/index': 'src/Details/index.ts',
    'FileUpload/index': 'src/FileUpload/index.ts',
    'Form/index': 'src/Form/index.ts',
    'LinearLoader/index': 'src/LinearLoader/index.ts',
    'LoadingButton/index': 'src/LoadingButton/index.ts',
    'Page/index': 'src/Page/index.ts',
    'Snackbar/index': 'src/Snackbar/index.ts',
    'Table/index': 'src/Table/index.ts',
    'helpers/index': 'src/helpers/index.ts',
    'hooks/index': 'src/hooks/index.ts',
  },
  format: ['esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  splitting: true,
  sourcemap: false,
  treeshake: true,
  minify: true,
  target: 'esnext',
  external: ['react', 'react-hook-form', '@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
  esbuildOptions(options) {
    options.bundle = true;
    options.minify = true;
  },
});
