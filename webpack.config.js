var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "test/main"),
  output: {
    filename: "[name].js?[hash]",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
        // V001$: path.resolve(__dirname, '0.0.1/iStorage.min.js'),
        // V002$: path.resolve(__dirname, '0.0.2/iStorage.min.js'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    port: 9000
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "iStorage Testing",
      template: path.resolve(__dirname, "test/index.html")
    }),
  ]
};
