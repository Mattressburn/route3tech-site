import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        wifiHelpLowell: resolve(__dirname, 'wifi-help-lowell/index.html'),
        computerHelpLowell: resolve(__dirname, 'computer-help-lowell/index.html'),
      },
    },
  },
});
