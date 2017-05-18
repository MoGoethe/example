const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const PORT = 3030;

module.exports = {
  port: PORT,
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: false,
    colors: true
  },
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:' + PORT,
    'webpack/hot/dev-server',
    path.resolve(APP_PATH, 'index.js')
  ],
  resolve: {
    alias: {
      modules: path.resolve(APP_PATH, 'redux', 'modules'),
      components: path.resolve(APP_PATH, 'components'),
      styles: path.resolve(APP_PATH, 'styles'),
      static: path.resolve(APP_PATH, 'static'),
      utils: path.resolve(APP_PATH, 'utils'),
    }
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loader: 'eslint',
      include: APP_PATH
    }],
    loaders: [{
      test: /\.scss$/,
      loader: 'style!css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!autoprefixer!sass',
      include: APP_PATH
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.(jpg|jpeg|gif|png|webp)$/,
      loader: 'url?limit=4000&name=images/[name].[hash:base64:5].[ext]'
    }, {
      test: /\.jsx?$/,
      loader: 'babel',
      include: APP_PATH
    }, {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      exclude: /node_modules/,
      loader: 'url?limit=1024&name=fonts/[name].[ext]'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      filename: 'index.html',
      hash: false,
      inject: 'body',
      template: './src/index.html',
      favicon: path.resolve(APP_PATH, 'static', 'favicon.ico'),
      showErrors: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};
