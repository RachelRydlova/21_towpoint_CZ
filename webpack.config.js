

    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');
    const path = require('path');
    const dir = path.resolve(__dirname, '.');

    module.exports = {
        entry: './www/assets/js/index.js',
        output: {
            filename: 'main.js',
            path: dir + '/www/src/'
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node-modules/,
                    // use: {
                    //     loader: 'babel-loader'
                    // }
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'clean-css-loader', // <----
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: "[id].css"
            }),
            new CleanWebpackPlugin(),
        ],
        resolve: {
            alias: {
                jquery: "jquery/assets/jquery"
            }
        },

    }

