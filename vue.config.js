const Dotenv = require('dotenv-webpack')

module.exports = {
  productionSourceMap: process.env.VUE_APP_ENV === 'development',
  configureWebpack: {
    plugins: [
      new Dotenv(),
    ]
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = process.env.VUE_APP_TITLE
        return args;
      })
  }
}
