module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        semi: true,
        arrowParens: 'avoid',
        jsxBracketSameLine: true,
        parser: 'typescript',
        useTabs: false,
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
