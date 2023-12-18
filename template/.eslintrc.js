module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    es2021: true,
    "react-native/react-native": true,
    "jest/globals": true,
  },
  extends: [
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'eslint:recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-native', 'simple-import-sort', '@tanstack/query'],
  rules: {
    'max-len': [2, { code: 120, ignoreUrls: true }],
    'max-lines': ['warn', { max: 350, skipBlankLines: true, skipComments: true }],
    'no-use-before-define': 'off',
    'max-lines-per-function': 'off',
    '@typescript-eslint/no-use-before-define': ['warn'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/no-rest-destructuring': 'warn',
    '@tanstack/query/stable-query-client': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        'groups': [
          ['^react', '^@?\\w'],
          ['^(@|components)(/.*|$)'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.?(css)$']
        ]
      }
    ]
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
