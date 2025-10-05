import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: [
        'src/services/**/*',
        'src/components/**/*',
        'src/stores/**/*',
        'src/hooks/**/*'
      ],
      exclude: [
        'src/app/**/*',
        'src/test/**/*',
        '**/*.d.ts',
        '**/*.config.*',
        '**/node_modules/**'
      ],
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80
        }
      }
    },
    include: [
      'tests/**/*.{test,spec}.{js,ts,jsx,tsx}'
    ],
    exclude: [
      'src/app/**/*',
      '**/node_modules/**'
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
