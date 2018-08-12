const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, "app/build/js/"),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'app')
    }
};
module.exports = config;