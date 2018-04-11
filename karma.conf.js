var webpackConfig = require("./webpack.dev.config.js");
module.exports = (config) => {
    config.set({
        // Paths
        basePath: "",
        exclude: [],
        files: [{
            pattern: "test/**/*.test.ts",
            watch: false
        }],

        // Module processing
        preprocessors: {
            "test/**/*.test.ts": ["webpack", "sourcemap"]
        },

        // Targets
        browsers: ["PhantomJS"],

        // Reporters
        reporters: ["dots"],
        logLevel: config.LOG_INFO,
        colors: true,

        // Test framework configuration
        frameworks: ["jasmine"],

        // Runner configuration
        port: 9876,
        autoWatch: true,
        singleRun: true,
        concurrency: Infinity,

        // Webpack config
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: "errors-only"
        }
    });
};
