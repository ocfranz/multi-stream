const webpack = require("webpack");
const path = require("path");
//const debug = require("debug");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, "build");
const APP_DIR = path.resolve(__dirname, "src/app");
const SRC = path.resolve(__dirname, "src");
const HTML_TEMPLATE_DIR = path.resolve(__dirname, "public/index.html");
var config = {
  entry: {
    client: [`${APP_DIR}/index.jsx`],
  },
  output: {
    path: BUILD_DIR,
    filename: "static/js/[name].[hash:8].min.js",
    chunkFilename: "static/js/[name].[hash:8].min.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i, //to support eg. background-image property
        loader: "file-loader",
        query: {
          name: "static/media/[path][name].[ext]",
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, //to support @font-face rule
        loader: "url-loader",
        query: {
          limit: "10000",
          name: "[path][name].[ext]",
          outputPath: "../",
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
          plugins: [
            "react-html-attrs",
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }],
          ],
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {},
    modules: [SRC, "node_modules"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].min.css",
    }),
    new HtmlWebPackPlugin({
      template: HTML_TEMPLATE_DIR,
    }),
    new webpack.ProvidePlugin({}),
    new CleanWebpackPlugin(),
  ],
};

module.exports = config;
