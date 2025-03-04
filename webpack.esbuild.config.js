const { EsbuildPlugin } = require("esbuild-loader");

module.exports = {
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "es2020",
        },
      },
    ],
  },
  optimization: {
    splitChunks: false, // Disable code splitting
    runtimeChunk: false, // Disable runtime chunk
    minimize: true,
    minimizer: [
      new EsbuildPlugin({
        target: "es2020",
      }),
    ],
  },
  experiments: {
    outputModule: true,
  },
  output: {
    library: {
      type: "module",
    },
    filename: "[name].js", // Use chunk names for filenames
    chunkFilename: "[name].js",
    chunkFormat: "module", // Force ESM format
    chunkLoading: false, // Disable Webpack chunk loading
  },
};
