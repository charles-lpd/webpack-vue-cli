module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname,
    // 允许使用ES语法
    ecmaVersion: 2019,
    // 允许使用import
    sourceType: 'module'
  },
  rules: {
    // never or always
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 打包时禁止debugger
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0, // 打包时禁止console
    'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    quotes: [2, 'single'], // 以单引号为主
    'array-bracket-spacing': [2, 'never'], // 数组 与内容是否 分开 never = [1,2] or always =  [ 1, 2 ]
    'comma-dangle': [2, 'never'], // 数组和对象 最后一个值 不需要逗号
    'comma-spacing': [2, { before: false, after: true }], // 控制逗号前后的空格
    'no-dupe-args': 2, //函数参数不能重复
    'no-empty': 2, //块语句中的内容不能为空
    'no-multi-spaces': 1, //不能用多余的空格
    'no-multiple-empty-lines': [1, { max: 2 }], //空行最多不能超过2行
    'no-redeclare': 2, //禁止重复声明变量
    'no-trailing-spaces': 1, //一行结束后面不要有空格
    eqeqeq: 2, //必须使用全等
    'key-spacing': [1, { beforeColon: false, afterColon: true }], //对象字面量中冒号的前后空格
    semi: [2, 'never'], //语句强制分号结尾
    'vue/multi-word-component-names': 0, // 文件名
    'vue/html-self-closing': 0, // 如果没有内容就自闭和标签
    'vue/html-indent': ['error', 2], // 默认标签两个空格
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1
        }
      }
    ],
    'vue/require-default-prop': 2, // 需要默认的 props 值
    'vue/require-prop-types': 2, // 需要在props 定义类型
    'vue/v-bind-style': ['error', 'shorthand'], // 绑定时 使用 : 语法糖 不能使用v-bind
    'vue/v-on-style': ['error', 'shorthand'], // 绑定事件时 使用 @ 语法糖
    '@typescript-eslint/no-var-requires': 'off',
    'vue/no-template-shadow': 0
  }
}
