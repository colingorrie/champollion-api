module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'prettier/prettier': 'error',
  },
};
