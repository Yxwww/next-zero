module.exports = {
  'extends': ['airbnb', 'prettier'],
  "parser": "babel-eslint",
  "plugins": ['prettier'],
  "rules": {
    "prettier/prettier": "error",
    "import/prefer-default-export": "warning",
    "react-hooks/rules-of-hooks": "error",
  },
  env: {
    browser: true,
    node: true,
  }
};
