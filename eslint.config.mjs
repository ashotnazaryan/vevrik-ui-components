import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import eslintJs from '@eslint/js';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';

export default [{
  files: ['**/*.{js,jsx,ts,tsx}'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: './tsconfig.json',
    },
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  plugins: {
    react: eslintPluginReact,
    'react-hooks': eslintPluginReactHooks,
    prettier: eslintPluginPrettier,
    '@typescript-eslint': eslintPluginTypeScript,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...eslintJs.configs.recommended.rules,
    ...eslintPluginReact.configs.recommended.rules,
    ...eslintPluginReactHooks.configs.recommended.rules,
    ...eslintPluginPrettier.configs.recommended.rules,
    ...eslintPluginTypeScript.configs.recommended.rules,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    eqeqeq: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['error'],
  },
}, {
  ignores: [
    'node_modules',
    'dist',
    'build',
    'vite.config.ts',
    'tsup.config.ts',
  ],
}];
