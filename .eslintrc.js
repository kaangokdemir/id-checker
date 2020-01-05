module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended",
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'pug',
  ],
  // add your custom rules here
  rules: {
    "semi": [2, "never"],
    'prettier/prettier': ["error", {semi: false, singleQuote: true, trailingComma: 'all', endOfLine:'auto'}],
    "vue/max-attributes-per-line": "warn",
    "vue/component-name-in-template-casing": "warn",
    'no-unused-vars': 'warn',
    "no-console": "off",
    "no-debugger": "off",
    "no-extend-native": "off",
  },
  globals: {
    SqPaymentForm: true,
    arguments: true
  }
}
