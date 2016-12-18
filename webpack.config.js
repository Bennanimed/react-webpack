'use strict';

const path      = require('path');
const webpack   = require('webpack');

console.log(__dirname);

module.exports = {
    watch   : true,
    entry: './app/js/main.js',
    output  : {
        path            : __dirname + '/build/',
        filename        : 'app.js'
    },
    devtool : 'source-map',
    devServer: {
        inline: true
    },
    debug: true,
    module  : {
        loaders : [
            {
                test    : /(\.ts|\.js)$/,
                loader  : 'babel-loader',
                query   : {
                    presets : [
                      'react',
                      'es2015',
                      'stage-0'
                    ]
                },
                exclude : path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    resolve : {
        extensions : [ '', '.ts', '.tsx', '.js', '.jsx' ]
    },
    plugins : [
        new webpack.ProvidePlugin({
            $               : 'jquery',
            jQuery          : 'jquery',
            'window.jQuery' : 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress : {
                warnings : false
            },
            output  : {
                comments : false
            }
        })
    ]
};
