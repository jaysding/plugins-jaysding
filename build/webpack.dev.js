const webpack = require('webpack');

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        port: 8080,
        hot: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
};

module.exports = devConfig;
