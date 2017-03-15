const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'docs_src');
const DEST_DIR = path.resolve(__dirname, 'docs');

module.exports = {
  entry: {
    index: path.resolve(SRC_DIR, 'index.js'),
    'babel-polyfill': 'babel-polyfill',
  },
  output: {
    path: DEST_DIR,
    filename: '[name].js',
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    compress: true,
    contentBase: DEST_DIR,
    watchContentBase: true,
    open: true,
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: '**/*.html',
        context: SRC_DIR,
        to: DEST_DIR,
      },
    ]),
  ],
};
