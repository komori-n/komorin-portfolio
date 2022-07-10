'use strict'
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: process.env.MODE_ENV || 'development',
    entry: resolve(__dirname, 'src/index.tsx'),
    output: {
        filename: 'index.js',
        path: resolve(__dirname, 'docs'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.jpg', '.png', '.yaml'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|jsx)$/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'file-loader',
                }
            },
            {
                test: /\.(yaml)$/,
                use: {
                    loader: 'yaml-loader',
                }
            },
        ],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}

if (process.env.MODE_ENV !== 'production') {
    module.exports.devtool = 'inline-source-map';
}