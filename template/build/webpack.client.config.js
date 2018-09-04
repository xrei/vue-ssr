const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'

const config = merge.smart(base, {
  entry: {
    app: './src/entry-client.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
          use: !isProd ? [
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
          ] : [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {minimize: isProd}
            },
            'postcss-loader'
          ]
      },
      {
        test: /\.styl(us)?$/,
        use: !isProd ? [
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
            'stylus-loader'
          ] :
          [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {minimize: isProd}
            },
            'postcss-loader',
            'stylus-loader'
          ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"',
      'process.browser': true,
      'process.client': true,
      'process.server': false
    }),

    new VueSSRClientPlugin()
  ],
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        vendor: {
          name: 'vendor',
          test (module) {
            return (
              /node_modules/.test(module.context) &&
              !/\.css$/.test(module.request)
            )
          }
        }
      }
    }
  }
})

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    // auto generate service worker
    new SWPrecachePlugin({
      cacheId: 'vue-ssr', // enter your name here
      filename: 'service-worker.js',
      minify: true,
      dontCacheBustUrlsMatching: /./,
      staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
      runtimeCaching: [ // add route paths here for service worker to cache
        {
          urlPattern: '/',
          handler: 'networkFirst'
        }
      ]
    })
  )
}

module.exports = config
