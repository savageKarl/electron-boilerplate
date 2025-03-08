import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

// 基础配置
const baseConfig = {
  ignores: ['**/dist/**', '**/node_modules/**'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: tseslint.parser,
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    prettier,
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};

// 主进程配置
const mainConfig = {
  ...baseConfig,
  files: ['packages/main/**/*.ts'],
  languageOptions: {
    ...baseConfig.languageOptions,
    globals: {
      ...globals.node,
    },
    parserOptions: {
      project: './packages/main/tsconfig.json',
    },
  },
};

// 预加载脚本配置
const preloadConfig = {
  ...baseConfig,
  files: ['packages/preload/**/*.ts'],
  languageOptions: {
    ...baseConfig.languageOptions,
    globals: {
      ...globals.node,
      ...globals.browser,
    },
    parserOptions: {
      project: './packages/preload/tsconfig.json',
    },
  },
};

// 渲染进程配置
const rendererConfig = {
  ...baseConfig,
  files: ['packages/renderer/**/*.{ts,tsx}'],
  languageOptions: {
    ...baseConfig.languageOptions,
    globals: {
      ...globals.browser,
      ...globals.es2021,
    },
    parserOptions: {
      project: ['./packages/renderer/tsconfig.app.json', './packages/renderer/tsconfig.node.json'],
    },
  },
  plugins: {
    ...baseConfig.plugins,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...baseConfig.rules,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};

export default [
  { ignores: ['**/dist/**', '**/node_modules/**'] },
  mainConfig,
  preloadConfig,
  rendererConfig,
];
