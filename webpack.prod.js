const merge = require("webpack-merge");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

var config = {
  mode : 'production',
  optimization : {
    minimize : true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'chunk.vendor',
          priority: -10,
          minSize: 0,
          reuseExistingChunk: true,
          chunks: 'initial',
          enforce: true,
        },
        utilities: {
          test: /[\\/]src[\\/]utils[\\/]/,
          name: 'chunk.utils',
          minSize: 0,
          reuseExistingChunk: true,
          chunks: 'all',
        },
      },
    }
  },
  plugins: [ 
    new UglifyJsPlugin(),
    new CleanWebpackPlugin({
      parallel : true,
      cache : true,
      sourceMap : true,
      uglifyOPtions : {
        output :{
          comments : false
        }
      }
    }
  )]
};

module.exports = merge(common, config);