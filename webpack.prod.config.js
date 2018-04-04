// External
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const FileChanger = require("webpack-file-changer")
const CnameWebpackPlugin = require("cname-webpack-plugin");
const path = require("path");

const gitHubPagesDomain = "www.personagenerator.net";

// Internal
const commonConfig = require("./webpack.base.config");
module.exports = webpackMerge(commonConfig, {
    output: {
        path: path.resolve(__dirname, "target"),
        filename: "bundle.[hash].js"
    },
    entry: "./app.ts",
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true,
                warnings: false
            },
            comments: false
        }),
        new FileChanger({
            change: [{
                file: "target/index.html",
                parameters: {
                    "bundle\\.js": "bundle.[hash].js",
                }
            }]
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new CnameWebpackPlugin({
            domain: gitHubPagesDomain,
        })
    ]
});
