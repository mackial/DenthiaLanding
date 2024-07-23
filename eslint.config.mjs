// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import eslintPluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';

export default withNuxt(
  {
    ignores: [
      '.vscode/*',
      '*.json',
      '.nuxt/',
      '.nuxt-storybook',
      'dist',
      '.output',
      'src/static',
      'src/public',
      'static',
      'public',
      'coverage',
      'node_modules',
      'package.json',
      'package-lock.json',
      'yarn.lock',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    rules: {
      semi: 'off',
    },
  },
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.vue', '*.mjs'],
    ...eslintPluginPrettier,
  },
  {
    files: ['*.vue', '**/*.vue', '**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'vue/multi-word-component-names': 'error',
      'prettier/prettier': [
        'error',
        {
          htmlWhitespaceSensitivity: 'ignore',
        },
      ],
    },
  },
  {
    files: ['app.vue', 'error.vue', 'pages/**/*.vue', 'layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  }
);
