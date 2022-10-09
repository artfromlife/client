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
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
const config: webpack.Configuration = {
    mode: 'production',
    entry: './main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    optimization: {
        minimize: true, // false 的话 不压缩代码, 内部用的是 TerserPlugin ?
        minimizer: [
            `...`, // 保留原来压缩JS等文件的能力
            new CssMinimizerPlugin()
        ],
        // runtimeChunk: 'single',
        chunkIds: 'named', //
        splitChunks: {
            chunks: 'all',
            // minSize: 1 * 1024, // 生成的chunk 必须大于 1kb
            // minSizeReduction: 0.1 * 1024, // 没拆一次包，主包就至少减少这么多字节，否则不拆
            // enforceSizeThreshold: 1024 * 20, // 超过 20kb 就拆包
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
        new MonacoEditorWebpackPlugin({
            languages: ['javascript']
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new ProgressBarPlugin(),
        new SpeedMeasurePlugin(),
        // new CompressionPlugin({
        //     threshold: 8 * 1024,
        // }),
        // new BundleAnalyzerPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    devServer: {
        port: 4128
    }
};

export default config;
