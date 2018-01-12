const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, './lib'),
		filename: '[name].bundle.js'
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
		new CleanWebpackPlugin(['lib']),
		new HtmlWebpackPlugin({
			title: 'Reusable Example VanillaJS',
			template: 'index.html'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		// contentBase: path.resolve(__dirname, './lib'),
		historyApiFallback: true,
		inline: true,
		open: true
	},
	devtool: 'eval-source-map'
};

module.exports = config;

console.log(`Looks like we are in ${process.env.NODE_ENV} mode!`);
if (process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin(), // call the uglify plugin,
		new OptimizeCSSAssets()
	);
}