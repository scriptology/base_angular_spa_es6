
var webpack = require("webpack");
//var BowerWebpackPlugin = require('bower-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var bourbon = require('node-bourbon');

var config = {
    entry: {
        app: ['./frontend-src/core/bootstrap.js'],
    },
    output: {
        path: __dirname + '/build/',
        publicPath: '/',
        filename: 'bundle.js',
    },

    resolve: {
        root: __dirname + '/frontend-src/',
    },
    devServer: {
        historyApiFallback: true,
    },
    watch: true,
    //devtool: "source-map", // or "inline-source-map"
    module: {
        noParse: [],
        loaders: [

            // FONTS & IMG
            {
                test: /\.(png|jpg|jpeg|svg|woff|svg|ttf|eot)([\?]?.*)$/,
                include: /\/node_modules\//,
                loader: "file?name=images/[hash].[ext]&regExp=node_modules/(.*)"
            },

            // {
            //     test: /\.(png|jpg|jpeg|svg|woff|svg|ttf|eot)([\?]?.*)$/,
            //     exclude: /\/node_modules\//,
            //     loader: "file?name=[path][name].[ext]"
            // },

            {
                test: /\.(jpe?g|png|gif|svg|woff|svg|ttf|eot)$/i,
                exclude: /(node_modules|bower_components)/,
                loader: 'file?limit=1500&name=images/[hash].[ext]'
            },

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'ng-annotate!babel'
            },

            // HTML
            {
                test: /\.html$/,
                loader: 'html-loader'
            },


            {
                test: /\.sass?$/,
                loader: ExtractTextPlugin.extract('style', '!css?sourceMap!resolve-url!sass?indentedSyntax&outputStyle=expanded&sourceMap&includePaths[]=' + encodeURIComponent(require('node-bourbon').includePaths))
            }

        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $:      "jquery",
            jQuery: "jquery"
        }),
        // new BowerWebpackPlugin({
        //     excludes: /.*\.less$/
        // }),

        // new webpack.ProvidePlugin({
        //
        // }),
        new ExtractTextPlugin('styles/[name].css', {
            allChunks: true
        })
    ],
};

module.exports = config;
