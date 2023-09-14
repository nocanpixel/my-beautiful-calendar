import { defineConfig } from 'vite';
import { resolve } from 'path'
import dts from 'vite-plugin-dts';
import react from "@vitejs/plugin-react-swc";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";


export default defineConfig({
  plugins: [
    react(),
    dts({
    insertTypesEntry: true,
  }),
  cssInjectedByJsPlugin(),
],
  build: {
    cssCodeSplit:true,
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'MyCalendar',
      fileName: `my-beautiful-calendar`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
  }
});