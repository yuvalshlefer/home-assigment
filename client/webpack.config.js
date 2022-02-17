const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/index.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
        modules: ['src', 'node_modules']
    },
    module: {
        rules: [
            { test: /\.([tj]sx)$/, use: 'babel-loader' },
            { test: /\.(css)$/, use: ['style-loader', 'css-loader'] },
            { test: /\.([tj]s)$/, use: 'babel-loader' },
            { test: /\.(png|jpe?g|gif)$/i, use: 'file-loader' }
        ]
    },
    devServer: {
        port: 8083
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            favicon: path.resolve(__dirname, 'src', 'assert', 'pipl.jpg')
        })
    ],
}