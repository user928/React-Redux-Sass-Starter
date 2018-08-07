const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: ['./src/index.js', './src/styles/main.scss'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './public/dist'),
	},
	module: {
		rules: [
			{
				test: /\.scss/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: 'eslint-loader',
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: 'babel-loader',
				options: {
					presets: ['react', 'stage-0', 'es2015'],
					plugins: ['transform-class-properties', 'transform-decorators-legacy'],
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	devServer: {
		contentBase: './public/',
		watchContentBase: true,
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
		new webpack.optimize.UglifyJsPlugin(),
	],
};
