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
    'plugin:prettier/recommended',
    'airbnb',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'], // 절대경로 import
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // import tsx 오류떠서
      },
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
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ], // import tsx 오류떠서
    'react/react-in-jsx-scope': 0, // nextjs는 항상 react를 import해서 규칙 필요 없음
    'react/jsx-props-no-spreading': 0, // props ... spread 쓰고싶어서 규칙 필요 없음
    'react/jsx-filename-extension': 0, // jsx대신 tsx를 쓰고싶어서 규칙 필요 없음
    'object-curly-newline': 0, // {} 안에 4개 이상 요소 있으면 에러떠서 규칙 필요 없음
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ], // next/link > a tag에서 href없으면 나는 오류 제거
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
      },
    ],
    'operator-linebreak': 0, // eslint prettier 충돌
    'react/jsx-closing-bracket-location': 0, // same as upper thing
  },
};
