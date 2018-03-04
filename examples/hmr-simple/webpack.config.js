const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/assets/',
    filename: 'index.js',
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ]
}
