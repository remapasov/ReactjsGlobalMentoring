const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require('webpack-merge');
const mode = process.env.NODE_ENV === "prod" ? "production" : "development";

const commonConfig = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map'
};

module.exports = mode === "production" ? commonConfig : merge(commonConfig, devConfig);