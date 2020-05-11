module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  "parser": "babel-eslint",
  rules: {
    "arrow-body-style": [0],
    "consistent-return": [0],
    "generator-star-spacing": [0],
    "global-require": [1],
    "import/extensions": [0],
    "import/no-extraneous-dependencies": [0],
    "import/no-unresolved": [0],
    "import/prefer-default-export": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "no-bitwise": [0],
    "no-cond-assign": [0],
    "no-else-return": [0],
    "no-nested-ternary": [0],
    "no-restricted-syntax": [0],
    "no-use-before-define": [0],
    "react/forbid-prop-types": [0],
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "react/jsx-no-bind": [0],
    "react/prefer-stateless-function": [0],
    "react/prop-types": [0],   // 这些react开头的都是针对react独有的
    "require-yield": [1],
    "no-console": "off"
  },
  "globals": {
    "document": true,
    "localStorage": true,
    "window": true,
    "test": true,
    "expect": true
  }
};
