// External
var fs = require("fs");
var path = require("path");
var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var TSLintPlugin = require("tslint-webpack-plugin");

//load to extract the restBase of  TnI.

// Internal
var commonConfig = require("./webpack.base.config");

module.exports = webpackMerge(commonConfig, {
    entry: "./app.ts",
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js"
    },
    watch: true,
    devServer: {
        port: 9000,
        historyApiFallback: {
            index: "src/"
        },
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        inline: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //new TSLintPlugin({
        //    files: ["src/**/*.ts"]
        // })
    ],
});
