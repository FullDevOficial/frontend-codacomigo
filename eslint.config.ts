import type { Linter } from 'eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import storybook from 'eslint-plugin-storybook';
import unusedImports from 'eslint-plugin-unused-imports';
const UNUSED_VARS_CONFIG = {
  vars: 'all',
  varsIgnorePattern: '^_',
  args: 'after-used',
  argsIgnorePattern: '^_',
};

const DEFAULT_IGNORES = ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'];

export default defineConfig([
  nextVitals,
  nextTs,

  {
    plugins: {
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    settings: { 'import/resolver': { typescript: { project: './tsconfig.json' } } },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/no-duplicates': 'error',
      'no-restricted-imports': [
        'error',
        { patterns: [{ group: ['../..*'], message: 'Use path aliases (@/...) instead of deep relative imports' }] },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['warn', UNUSED_VARS_CONFIG],
      'no-var': 'error',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'prefer-const': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },

  {
    files: ['public/sw.js', 'public/workbox-*.js'],
    rules: {
      'prefer-const': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },

  prettier,
  globalIgnores(DEFAULT_IGNORES),

  ...(storybook.configs['flat/recommended'] as unknown as Linter[]).map((config) => ({
    ...config,
    files: ['**/*.stories.ts', '**/*.stories.tsx'],
  })),
]);
