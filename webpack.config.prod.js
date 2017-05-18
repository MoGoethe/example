const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
  entry: {
    app: './src/index',
    vendors: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'redux-thunk',
      'react-tap-event-plugin',
      'rc-form',
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.[hash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      modules: path.resolve(APP_PATH, 'redux', 'modules'),
      components: path.resolve(APP_PATH, 'components'),
      styles: path.resolve(APP_PATH, 'styles'),
      static: path.resolve(APP_PATH, 'static'),
      utils: path.resolve(APP_PATH, 'utils'),
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]!autoprefixer!sass-loader")
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      exclude: /node_modules/,
      loader: 'url?limit=1024&name=fonts/[name].[ext]'
    }, {
      test: /\.(jpg|jpeg|gif|png|webp)$/,
      loader: 'url?limit=4000&name=images/[name].[hash:base64:5].[ext]'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("[name].[hash].css"),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlwebpackPlugin({
      filename: 'index.html',
      hash: false,
      inject: 'body',
      template: './src/index.html',
      favicon: path.resolve(APP_PATH, 'static', 'favicon.ico'),
      showErrors: false,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
