const path = require('path');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonConfig = {
    entry: {
        main: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                }]
            },
        ],
    },
    optimization: {
        usedExports: true
    },
    // performance: false,
    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'dist'),
        libraryTarget: 'umd',
        library: 'drag-scroll-plugin',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'test-drag-scroll-plugin',
            filename: 'index.html',
            template: 'src/index.html',
        }),
        new CleanWebpackPlugin()
    ]
};

module.exports = (env) => {
    if (env && env.production) {
        return merge(commonConfig, prodConfig);
    } else {
        return merge(commonConfig, devConfig);
    }
};
