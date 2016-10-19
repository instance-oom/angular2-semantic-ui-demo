var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var helpers = require('./helpers');

var node_dir = helpers.root('node_modules');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts'],
    root: []
  },

  module: {
    loaders: [
      { 
        test: /\.ts$/, 
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      { 
        test: /\.html$/, 
        loader: 'html' 
      },
      { 
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, 
        loader: 'file?name=assets/[name].[ext]' 
      },
      { 
        test: /\.css$/, 
        exclude: helpers.root('src', 'app'), 
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap') 
      },
      { 
        test: /\.css$/, 
        include: helpers.root('src', 'app'), 
        loader: 'raw' 
      },
      { 
        test: require.resolve('jquery'), 
        loader: 'expose?jQuery!expose?$' 
      },
      {
        test: /oboe-browser.js$/,
        loader: 'expose?oboe'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
