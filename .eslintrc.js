module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0, // nextjs는 항상 react를 import해서 규칙 필요 없음
    'react/jsx-props-no-spreading': 0, // props ... spread 쓰고싶어서 규칙 필요 없음
    'react/jsx-filename-extension': 0, // jsx대신 tsx를 쓰고싶어서 규칙 필요 없음
  },
};

// module.exports = {
//   parser: '@typescript-eslint/parser',
//   extends: [
//     'plugin:react/recommended',
//     'plugin:@typescript-eslint/recommended',
//     'prettier/@typescript-eslint',
//     'plugin:prettier/recommended',
//   ],
//   plugins: ['@typescript-eslint', 'react'],
//   rules: {},
// };
