var path = require('path');
var testLoaderPattern = /\.js(x?)$/;
var webpack = require('webpack');
const APP_PUBLIC_PATH = process.env.APP_PUBLIC_PATH || '/';
//maybe we don't need rewire for mocking, because we use jasmine spy instead
//var RewirePlugin = require('rewire-webpack');

var webpackConfig = {
    devtool: 'inline-source-map',
    resolve: {
        root: [
            path.resolve('./src'),
            path.resolve('./src/**/')
        ],
        extensions: ['', '.js', '.properties']
    },
    babel: {
        presets: ['es2015',],
        plugins: ['transform-object-assign']
    },
    isparta: {
        embedSource: true,
        noAutoWrap: true,
        // these babel options will be passed only to isparta and not to babel-loader
        babel: {
            presets: ['es2015'],
            plugins: ['transform-object-assign']
        }
    },
    module: {
        preLoaders: [
            {
                test: testLoaderPattern,
                exclude: [
                    path.resolve('./src/'),
                    path.resolve('node_modules/')
                ],
                loader: 'babel'
            },
            // transpile and instrument only testing sources with isparta
            {
                test: testLoaderPattern,
                include: [
                    path.resolve('./src/'),


                ],
                loader: 'isparta'
            }
        ],
        loaders: [
            {test: /\.properties$/, loader: 'properties-loader'}
        ],
    },
    stats: {
        colors: true
    },
    eslint: {configFile: '.eslintrc'}
};


module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: 'src/',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            '../node_modules/react-tools/src/test/phantomjs-shims.js',
            '../node_modules/babel-polyfill/dist/polyfill.js',
            'test/index.js'
        ],

        // list of files to exclude
        exclude: [
            'vendor/**/*'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/index.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        },
        webpackMiddleware: {
            stats: {
                chunkModules: false,
                colors: true
            }
        },
        // test reporters
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'coverage', 'dots'],
        captureTimeout: 90000,
        browserNoActivityTimeout: 60000,
        port: 9876,
        colors: true,
        logLevel: config.LOG_DISABLE,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        coverageReporter: {
            type: 'cobertura',
            subdir: '.',
            dir: '../build/reports/cobertura/',
            file: 'js-coverage.xml'
        }
    });
};
