const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "src/index.ts"),
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    port: 8080,
    static: path.resolve(__dirname, "public"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }],
  },
};
