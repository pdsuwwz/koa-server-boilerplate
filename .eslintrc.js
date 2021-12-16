module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 1,
    'no-undef': 1,
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',
    // https://cn.eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 2, // 禁用行尾空白
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'space-before-function-paren': 1, // 函数括号前空格
    'object-curly-spacing': ['error', 'always'],
    'space-infix-ops': ['warn', { 'int32Hint': false }], // 运算符周围的空格

    // https://cn.eslint.org/docs/rules/key-spacing
    'key-spacing': ['warn', { 'mode': 'strict' }], // 强制在对象字面量的键和值之间使用一致的空格 (key-spacing)

    // https://cn.eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never'], // 禁止或强制圆括号内的空格

    // https://stackoverflow.com/questions/32937672/enforce-space-before-curly-brace-in-functions
    'space-before-blocks': [
      'warn',
      {
        'functions': 'always',
        'keywords': 'never',
        'classes': 'always'
      }
    ], // 要求或禁止语句块之前的空格

    'no-irregular-whitespace': 2,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': [
      2,
      {
        max: 2
      }
    ],
    // https://cn.eslint.org/docs/rules/eol-last
    'eol-last': 2,
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': 2,
    camelcase: ['error', { properties: 'never' }],
    indent: ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true
        }
      }
    ],
    '@typescript-eslint/no-empty-function': 0,
    // semi: ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-var-requires': 0
  }
}
