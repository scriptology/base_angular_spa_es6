
//var webpack = require("webpack");
//var BowerWebpackPlugin = require('bower-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: {
        app: ['./src/core/bootstrap.js'],
    },
    output: {
        path: __dirname + '/build/',
        publicPath: '/',
        filename: 'bundle.js',
    },
    resolve: {
        root: __dirname + '/src/',
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        noParse: [],
        loaders: [

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'ng-annotate!babel'
            },

            // HTML
            {
                test: /\.html$/,
                loader: 'raw'
            },

            {
                test: /\.css$/,
                loader: "style!css-loader?modules"
            },


            // CSS
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            // },

            // // SASS
            // {
            //     test: /\.sass$/,
            //     loader: ExtractTextPlugin.extract('css!sass?indentedSyntax')
            // }
        ]
    },
    plugins: [
        // new BowerWebpackPlugin({
        //     excludes: /.*\.less$/
        // }),

        // new webpack.ProvidePlugin({
        //
        // }),
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
    ],
};

module.exports = config;
