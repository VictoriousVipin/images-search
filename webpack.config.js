const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node-modules/",
        loader: "babel-loader",
      },
      {
        test: /\.s?css$/,
        exclude: "/node-modules/",
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    contentBase: "./public",
  },
  devtool: "eval-cheap-module-source-map",
};
