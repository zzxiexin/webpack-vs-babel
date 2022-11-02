const path = require("path");
module.exports = {
    mode: 'development',
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'bundle.js',
    },
    module: {
        rules: [ {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
        }],
    }
}