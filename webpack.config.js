var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var values = require('postcss-modules-values');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');
var MODULE_PATH = path.resolve(ROOT_PATH, 'node_modules');

var getEnv = function() {
  return process.env.NODE_ENV;
};

var isDev = function() {
  return getEnv() === 'development';
};

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: DIST_PATH,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js / jsx
      exclude: /node_modules/,
      loader: 'babel' // 加载模块 "babel" 是 "babel-loader" 的缩写
    }, {
      test: /\.css$/, // Only .css files
      loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]", "postcss-loader")
    }, {
      test: /\.(png|jpg|gif|svg|woff|svg|ttf|eot)$/,
      // include: [SRC_PATH, MODULE_PATH],
      loader: 'url?limit=30000&name=[name]-[hash].[ext]'
    }]
  },
  resolve: {
    alias: { // 设置别名，快速寻址
      'components': path.resolve(SRC_PATH, 'components'),
      'colors': path.resolve(SRC_PATH, 'styles', 'config', 'colors.css'),
      'images': path.resolve(SRC_PATH, 'images'),
      'react': path.resolve(MODULE_PATH, 'react', 'react'),
      'react-dom': path.resolve(MODULE_PATH, 'react', 'lib', 'ReactDOM'),
      'react-router': path.resolve(MODULE_PATH, 'react-router', 'lib'),
      'superagent': path.resolve(MODULE_PATH, 'superagent', 'lib', 'client')
    }
  },
  postcss: function(webpack) {
    return [
      precss,
      values, // 使用变量
      autoprefixer //样式自动加前缀
    ];
  },
  plugins: [
    new ExtractTextPlugin("styles.css"), // 样式文件独立出来
  ]
};

if (!isDev()) {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({ // 压缩 JS & CSS
      compress: {
        warnings: false
      }
    })
  ])
}
