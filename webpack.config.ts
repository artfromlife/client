// https://webpack.docschina.org/configuration/configuration-languages/

import * as path from 'path';
import * as webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';
import HtmlWebpackPlugin from "html-webpack-plugin";
const config: webpack.Configuration = {
    mode: 'production',
    entry: './main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    optimization: {
        minimize: true // false 的话 不压缩代码
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }), // 该插件将为你生成一个 HTML5 文件， 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle
            // 插入的 script 用的是 defer, 并行下载js资源, 不阻塞且不打断html解析
    ],
    devServer: {
        port: 4128
    }
};

console.log('当前环境：' + process.env.NODE_ENV)
export default config;