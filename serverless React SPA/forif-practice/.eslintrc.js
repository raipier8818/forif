module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node":true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:import/error',
    'plugin:import/warning',
    'airbnb',
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "plugins": [
    // "@typescript-eslint"
  ],
  "rules": {
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
  }
};
