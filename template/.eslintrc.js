module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
    // node: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue
    'plugin:vue/strongly-recommended', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  extends: ['plugin:vue/strongly-recommended'],
  rules: {
    'prefer-promise-reject-errors': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
