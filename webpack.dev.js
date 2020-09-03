const merge = require("webpack-merge");
const path = require("path");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

const BUILD_DIR = path.resolve(__dirname, "src/public");

var config = {
  devtool: 'source-map',
  watch: true,
  mode: 'development',
  devServer: {
    contentBase: BUILD_DIR,
    watchOptions : {
      poll : true
    },
    compress: true,
    hot: true,
    host: "localhost",
    port: 5000, 
    //public : '0.0.0.0:80',
    proxy: {
      "^/api/*": {
        target: "http://localhost:3000/",
        secure: false
      }
    }
  },
  plugins:[
    new BundleAnalyzerPlugin(),
   
  ]
};

module.exports = merge(common, config);