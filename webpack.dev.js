const path = require("path");
const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  entry: path.join(__dirname, "src/dev.ts"),
  devServer: {
    port: 8080,
    static: __dirname,
  },
});
