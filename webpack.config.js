const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
  entry: './index.js',
	output: {
		path: path.resolve((__dirname, 'dist')),
		filename: 'index.bundle.js',
	},
	module: {
		rules: [
			{ test: /\.css$/, use: 'css-loader'},
		]
	},
	plugins: [new HtmlWebpackPlugin({ template: './index.html'})],
};
