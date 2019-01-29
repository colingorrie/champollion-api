module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'jest', 'import'],
  settings: {
    'import/parsers': {
      'typescript-eslint-parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  env: {
    'jest/globals': true,
  },
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'prettier/prettier': 'error',
  },
};
