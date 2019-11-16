// 处理路径
// const path = require('path')
// function resolve (dir) {
//   return path.join(__dirname, '../../../' + dir)
// }

module.exports = {
  system: {
    supportIE8: false,
    pages: '_demo',
    modules: 'admin',
    resolveAlias: {},
    externals: {
    }
  },
  build: {
    env: {
      NODE_ENV: '"production"',
      // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
      BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"'
      // BASE_API: '"https://api-dev"',
    }
  },
  dev: {
    port: 9529,
    env: {
      NODE_ENV: '"development"',
      // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
      BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"'
      // BASE_API: '"https://api-prod"',
    }
  }
};
