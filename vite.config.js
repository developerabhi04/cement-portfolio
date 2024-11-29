import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Use additionalData to inject common imports into every SCSS file
        additionalData: `
          @use "mixin" as *;
          @use "header" as *;
          @use "home" as *;
          @use "services" as *;
          @use "mediaquery" as *;
        `
      }
    }
  }
});
