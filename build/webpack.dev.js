const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackBaseConfig = require("./webpack.base.js");
const { merge } = require("webpack-merge");

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      inject: true,
      hash: true,
    }),
  ],
});
