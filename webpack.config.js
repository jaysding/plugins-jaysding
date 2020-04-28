const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        openPage: './test.html',
        open: true,
        hot: true,
        // hotOnly: true,
		port: 8080
    },
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		// libraryTarget: 'umd',
		// library: 'drag-scroll-plugin'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'test-drag-scroll-plugin',
            filename: 'test.html',
            template: 'src/index.html'
          }),
        new CleanWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}