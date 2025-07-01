import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignore compiled output
  { ignores: ['dist'] },

  // Lint all JS and JSX files
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Use recommended JS + React Hooks rules
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Allow unused vars if they start with an uppercase (e.g., React)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // Warn if components are not exported properly for React Fast Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
