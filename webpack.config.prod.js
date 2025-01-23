const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

//prod-config
module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',

  plugin: [new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })],
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
    ],
  },

  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          },
        },
      }),
      new TerserPlugin({
        parallel: true,
        // Enable file caching
        cache: true,
        sourceMap: true,
      }),
    ],
  },
});
