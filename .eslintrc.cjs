module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'vue'
  ],
  rules: {
    // Possible Errors
    'no-console': 'warn', // 警告使用console.log
    'no-debugger': 'error', // 禁止使用debugger
    'no-extra-semi': 'error', // 禁止不必要的分号

    // Best Practices
    'eqeqeq': ['error', 'always'], // 强制使用全等
    'curly': ['error', 'all'], // 强制所有控制语句使用大括号
    'default-case': 'warn', // switch语句必须提供default分支

    // Variables
    'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }], // 禁止未使用的变量

    // Stylistic Issues
    'semi': 'off', // 不使用分号
    'quotes': ['error', 'single'], // 强制使用单引号
    'indent': ['error', 2], // 强制使用2空格缩进
    'linebreak-style': ['error', 'unix'], // 强制使用unix换行风格

    // ES6
    'arrow-spacing': ['error', { 'before': true, 'after': true }], // 强制箭头函数的箭头前后使用一致的空格

    // Vue
    'vue/html-indent': ['error', 2],
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1
      },      
      'multiline': {
        'max': 1
      }
    }],
    'vue/first-attribute-linebreak': ['error', {
      'singleline': 'ignore',
      'multiline': 'below'
    }],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        'singleline': 'never',
        'multiline': 'always',
        'selfClosingTag': {
          'singleline': 'never',
          'multiline': 'always'
        }
      }
    ],
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'always'
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true,
      'allowEmptyLines': false
    }],
    'vue/multi-word-component-names': 'off',

    // TypeScript
    '@typescript-eslint/no-unused-vars': ['warn'], // 禁止TypeScript未使用的变量
  }
}
