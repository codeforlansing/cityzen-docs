const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')
// var webpack = require('webpack')


module.exports = {
  mode: 'universal',
  

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl',
 //   'quill/dist/quill.snow.css',
 //   'quill/dist/quill.bubble.css',
 //   'quill/dist/quill.core.css'
    ],
  
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
//'~/plugins/nuxt-quill-plugin.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
 //   new webpack.ProvidePlugin({
 //    'window.Quill': 'quill/dist/quill.js',
 //     'Quill': 'quill/dist/quill.js'
 //   })
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
  
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
