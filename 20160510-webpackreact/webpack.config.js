// http://webpack.github.io/docs/configuration.html

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
  }
};
