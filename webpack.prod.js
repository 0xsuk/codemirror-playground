const path = require("path");
const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  entry: path.join(__dirname, "src/index.ts"),
});
