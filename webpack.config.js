
const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'build'), publicPath: '/', filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./app.html"
        })
    ]
};
