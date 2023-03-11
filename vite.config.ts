import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path'

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'MyCalendar',
      fileName: format => `my-beautiful-calendar.${format}.js`,
      formats: ['es', 'cjs', 'umd', 'iife']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});