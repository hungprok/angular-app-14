const { EsbuildPlugin } = require('esbuild-loader');

module.exports = {
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2020'
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: 'es2020'
      })
    ]
  }
};
