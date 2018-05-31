// External
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const FileChanger = require("webpack-file-changer")
const CnameWebpackPlugin = require("cname-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

const gitHubPagesDomain = "www.personagenerator.net";

// Internal
const commonConfig = require("./webpack.base.config");
module.exports = webpackMerge(commonConfig, {
    mode: "production",
    entry: "./app.ts",
    output: {
        path: path.resolve(__dirname, "target"),
        filename: "bundle.[hash].js"
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new FileChanger({
            change: [{
                file: "target/index.html",
                parameters: {
                    "bundle\\.js": "bundle.[hash].js",
                }
            }]
        }),
        new CnameWebpackPlugin({
            domain: gitHubPagesDomain,
        }),
        new CopyWebpackPlugin([{
            from: "imgs/",
            to: "imgs/"
        }])
    ]
});
