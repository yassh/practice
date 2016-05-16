// http://webpack.github.io/docs/configuration.html

module.exports = {
  context: __dirname + '/src',
  entry: {
    index: './index.jsx'
  },
  output: {
    path: __dirname + "/built",
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: "babel-loader" },
    ]
  }
};
