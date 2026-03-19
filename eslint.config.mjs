// eslint.config.mjs
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactNativePlugin from 'eslint-plugin-react-native';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules'],
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  reactPlugin.configs.flat.recommended,
  reactHooksPlugin.configs.recommended,
  reactNativePlugin.configs.all,

  prettierRecommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    rules: {
      // 🔥 TypeScript
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/strict-boolean-expressions': 'warn',

      // 🧠 Código limpo
      complexity: ['warn', 10],
      'max-lines-per-function': ['warn', 80],
      'max-depth': ['warn', 3],
      'max-params': ['warn', 4],

      // ⚛️ React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // 🪝 Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // 📱 React Native
      'react-native/no-inline-styles': 'warn',
      'react-native/no-color-literals': 'off',

      // 🧱 Boas práticas gerais
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-console': ['warn'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-throw-literal': 'error',

      // 📦 Organização de imports
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
    },
  },
);
