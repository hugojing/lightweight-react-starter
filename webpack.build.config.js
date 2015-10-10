var path = require('path');
var webpack = require('webpack');



module.exports = {
	entry: {
		main: './app/main.jsx',
	},
	output: {
		path: './build',
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
			exclude: /node_modules/,
			loader: 'babel' // 加载模块 "babel" 是 "babel-loader" 的缩写
		}, {
			test: /\.css$/, // Only .css files
			loader: 'style!css' // Run both loaders
		}]
	},
	plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
	]
};