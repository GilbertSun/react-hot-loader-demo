const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/assets/',
    filename: 'index.hot.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ]
}
