import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'VevrikUIComponents',
      formats: ['es', 'cjs'],
      fileName: (format) => `vevrik-ui-components.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@mui/material', '@mui/icons-material'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MaterialUI',
        },
      },
    },
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
  },
});
