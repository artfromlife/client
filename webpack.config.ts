// https://webpack.docschina.org/configuration/configuration-languages/

import path from 'path';
import webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MonacoEditorWebpackPlugin from 'monaco-editor-webpack-plugin'
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import CssMinimizerPlugin from "css-minimizer-webpack-plugin"
import {CleanWebpackPlugin} from "clean-webpack-plugin"
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer' // split bundles , not code splitting 先把大的包拆成小的

const config: webpack.Configuration = {
    mode: 'production',
    entry: './main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    optimization: {
        minimize: true, // false 的话 不压缩代码, 内部用的是 TerserPlugin ?
        minimizer: [
            `...`, // 保留原来压缩JS等文件的能力
            new CssMinimizerPlugin()
        ],
        // runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            minSize: 10 * 1024,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {test: /\.ts$/, use: {loader: 'ts-loader'}}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }), // 该插件将为你生成一个 HTML5 文件， 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle
            // 插入的 script 用的是 defer, 并行下载js资源, 不阻塞且不打断html解析
        // new MonacoEditorWebpackPlugin({
        //     languages: ['javascript']
        // }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    devServer: {
        port: 4128
    }
};

export default config;
