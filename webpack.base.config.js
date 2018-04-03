// External
const path = require("path");
const fs = require("fs");
const moment = require("moment");
const GitRevisionPlugin = require("git-revision-webpack-plugin");

const rawBuildDate = new Date();
// Build datestring
// Regex for extracting the timezone from http://stackoverflow.com/a/15304657
const buildDate = `${
    moment(rawBuildDate).format("YYYY-MM-DD HH:mm")
    } ${
    rawBuildDate.toString().match(/([A-Z]+[\+-][0-9]+)/)[1]
    }`;

module.exports = {
    context: path.resolve(__dirname, "src"),
    plugins: [
        gitrevisionplugin = new GitRevisionPlugin({
            lightweightTags: true
        })
    ],

    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".ts", ".json", "vue"],
        alias: {
            vue$: "vue/dist/vue.esm.js"
        }
    },

    module: {
        rules: [{
                test: /(\.ts|\.js)$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        ts: "ts-loader!tslint-loader"
                    },
                    esModule: true
                }
            },
            {
                test: /\.html$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                },
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    mimetype: "application/font-woff"
                }
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    mimetype: "application/octet-stream"
                }
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            },
            {
                test: /(\.png|\.ico|\.jpg|\.svg)$/,
                loader: "file-loader",
                options: {
                    name: "imgs/[name].[ext]"
                }
            },
            // String replacement
            {
                test: /(config\.ts)$/,
                enforce: "pre",
                loader: "string-replace-loader",
                query: {
                    multiple: [{
                            search: "$VERSION",
                            replace: gitrevisionplugin.version()
                        },
                        {
                            search: "$BUILDDATE",
                            replace: buildDate
                        }
                    ]
                }
            }
        ]
    }
};
