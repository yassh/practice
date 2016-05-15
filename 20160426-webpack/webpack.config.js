// http://webpack.github.io/docs/configuration.html

module.exports = {
  context: __dirname,
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  }
};
