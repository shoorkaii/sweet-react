/**
 * Created by reza on 7/9/17.
 */

const webpack = require('webpack');

const path = require('path');
const root = path.resolve(__dirname, '');
const srcBase = path.resolve(__dirname, 'frontend');
const buildBase = path.resolve(__dirname, 'server/public/build');

module.exports = {
    entry: {
        index: path.resolve(srcBase, 'index.js')
    },
    output: {
        filename: 'build.js',
        path: buildBase
    },
    resolve: {
        modules: [
            path.resolve(root, 'node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(root, 'node_modules'),
                loader: 'babel-loader'
            }
        ]
    }
};