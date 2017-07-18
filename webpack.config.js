const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractStyles = new ExtractTextPlugin('styles.css');

const webpackConfig = {
    entry: './src/index.jsx',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /.(js|jsx)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/i,
                use: extractStyles.extract([ 'css-loader', 'less-loader' ])
            },
            {
                test: /\.html$/i,
                loader: 'file-loader?name=[name].[ext]'
            },
        ]
    },
    plugins: [
        extractStyles
    ]
};

module.exports = webpackConfig;