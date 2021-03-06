module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'google'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    indent: 'off',
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix',
    ],
    'no-invalid-this': 0,
    'operator-linebreak': [
      2,
      'after',
      {overrides: {'?': 'ignore', ':': 'ignore'}},
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'react/prop-types': 0,
  },
  parserOptions: {
    sourceType: 'module',
  },
};
