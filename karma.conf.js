const webpackConfig = require("./webpack.base.config.js");
module.exports = (config) => {
    config.set({
        // Paths
        basePath: "",
        exclude: [],
        files: [{
            pattern: "./test/**/*.test.ts"
        }],
        // Module processing
        preprocessors: {
            "test/**/*.test.ts": ["webpack", "sourcemap"],
            "src/**/*.(ts|vue)": ["coverage"]
        },
        // Targets
        browsers: ["ChromeHeadless"],
        // Reporters
        reporters: ["spec", "coverage"],
        logLevel: config.LOG_INFO,
        colors: true,
        // Test framework configuration
        frameworks: ["jasmine"],
        mime: {
            "text/x-typescript": ["ts", "tsx"]
        },
        // Runner configuration
        port: 9876,
        singleRun: true,
        concurrency: Infinity,
        // Webpack config
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: "errors-only"
        },
        coverageReporter: {
            dir: "./coverage",
            reporters: [{
                    type: "html",
                    subdir: "report-html"
                },
                {
                    type: "lcov",
                    subdir: "."
                },
                {
                    type: "text-summary",
                    subdir: ".",
                    file: "text-summary.txt"
                }
            ]
        }
    });
};
