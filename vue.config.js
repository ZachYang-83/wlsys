const path = require('path')
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      sass: {

      },
      scss: {
      }
    }
  },

  devServer: {
    open: true,
    host: 'localhost',
    port: 8082,
    https: false,
    hotOnly: false,
    proxy: { // 配置跨域
      '/pop_perceive': {
        target: 'http://localhost:8090',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/pop_perceive': '/pop_perceive'
        },
      },
      '/transportation': {
        target: 'http://localhost:8090',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/transportation': '/transportation'
        },
      },
      '/publicInfo': {
        target: 'http://localhost:8090',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/publicInfo': '/publicInfo'
        },
      },
      '/landUse': {
        target: 'http://localhost:8090',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/landUse': '/landUse'
        },
      },
      '/houseInfo': {
        target: 'http://localhost:8090',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/houseInfo': '/houseInfo'
        },
      },
      '/industryInfo': {
        target: 'http://localhost:8090',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/industryInfo': '/industryInfo'
        },
      },
    }
  },

  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        'assets': path.resolve('src/assets'),
        'components': path.resolve('src/components'),
        'views': path.resolve('src/views'),
        'store': path.resolve('src/store'),
        'router': path.resolve('src/router'),
        'api': path.resolve('src/api'),
        'utils': path.resolve('src/utils'),
      }
    },
  }
}