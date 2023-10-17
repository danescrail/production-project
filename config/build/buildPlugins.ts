import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins (options: BuildOptions): webpack.WebpackPluginInstance[] {
    const { paths, isDev } = options;
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css' // Разбивка асихнронных файлов и синхронных
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ];
}