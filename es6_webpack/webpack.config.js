const path = require("path");
module.exports = {
    devtool: "eval-source-map",
    entry: "./src/app.js",
    mode: 'none',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js',
        publicPath: '/public/'
    },
    module: {
        rules: [
                {
                    enforce: "pre",
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "eslint-loader"
                },
                {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-env'], // Use the @babel/preset-env preset
                    //   },

                } }
        ]
    }
}