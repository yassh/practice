// https://webpack.github.io/docs/configuration.html
// https://webpack.github.io/docs/using-plugins.html

var webpack = require("webpack");

module.exports = {
  context: __dirname + '/htdocs/jsx',
  entry: {
    index: './index.jsx'
  },
  output: {
    path: __dirname + "/htdocs/js",
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: "babel-loader" },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
