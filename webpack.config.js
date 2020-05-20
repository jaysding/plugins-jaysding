const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'dist'),
        library: 'drag-scroll-plugin',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader',
            }
        ],
    },
    performance: false,
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: 'test-drag-scroll-plugin',
        //     filename: 'index.html',
        //     template: 'src/index.html',
        // }),
        new CleanWebpackPlugin()
    ]
};

