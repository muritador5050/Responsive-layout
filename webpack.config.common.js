const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  //Entry
  entry: './src/index.js',

  //Output
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    //Rule
    rules: [{ test: /\.(js|jsx)$/, use: { loader: 'babel-loader' } }],
  },

  //Plugin
  plugin: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: true,
    }),
  ],
};
