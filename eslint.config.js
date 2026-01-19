import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 1. Global Ignores
  {
    ignores: [
      '**/.server',
      '**/.client',
      'build',
      'public/build',
      'dist',
      'node_modules',
      '.cache',
    ],
  },

  // 2. Base Configs (Remix + React + MDX)
  // We use compat.extends to load the legacy @remix-run config
  ...compat.extends(
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'plugin:mdx/recommended'
  ),

  // 3. TypeScript & React Overrides (Manual adjustments for v9)
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: { version: 'detect' },
      formComponents: ['Form'],
      linkComponents: [
        { name: 'Link', linkAttribute: 'to' },
        { name: 'NavLink', linkAttribute: 'to' },
      ],
    },
  },

  // 4. Prettier (Must be last to override others)
  ...compat.extends('prettier'),
];
