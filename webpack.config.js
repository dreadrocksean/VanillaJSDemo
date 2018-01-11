const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

let config = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, './lib'),
		filename: 'script.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.scss$/,
				use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
					use: ["css-loader", "sass-loader", "postcss-loader"],
					fallback: "style-loader"
				}))
			}
		]
	},
	plugins: [
		new ExtractTextWebpackPlugin('styles.css'),
	],
	devServer: {
		contentBase: path.resolve(__dirname, './lib'),
		historyApiFallback: true,
		inline: true,
		open: true,
	},
	devtool: 'eval-sourve-map'
};

module.exports = config;

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin(), // call the uglify plugin,
		new OptimizeCSSAssets()
	);
}