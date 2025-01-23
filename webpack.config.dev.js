const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common'(
  //dev-config
  (module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      hot: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
      rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
    },
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
  }))
));
