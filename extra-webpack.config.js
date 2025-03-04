module.exports = {
  output: {
    library: {
      type: "module", // ✅ Export as ES module
    },
    filename: "[name].js", // Keep original file name
    chunkFilename: "[name].js", // Chunk file names for lazy loading
  },
  experiments: {
    outputModule: true, // ✅ Enable ES module output
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false, // ✅ Allow imports without file extensions
        },
      },
    ],
  },
};
