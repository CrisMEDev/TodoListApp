const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

// en el build del webpack se pueden especificar banderas si son necesarias
 
module.exports = {
 
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new OptimizeCssAssetsPlugin({}),
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
            })
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/i,
                exclude: /styles\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /styles\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false,
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: 'body'  // Por defecto lo dejaría encima del body
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css', // [contenthash] despues de name para generar un hashCode en el name y evitar problemas en cache
            ignoreOrder: false
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets/' }
            ]
        })
    ],
    output: {
        filename: 'main.[contenthash].js',
        clean: true,
    },
 
}
