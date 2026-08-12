import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        sitesEstrategicos: resolve(import.meta.dirname, 'sites-estrategicos/index.html'),
        comoFunciona: resolve(import.meta.dirname, 'como-funciona/index.html'),
        sobre: resolve(import.meta.dirname, 'sobre/index.html')
      }
    }
  }
});
