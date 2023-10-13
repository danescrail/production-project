import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack"
import { BuildOptions } from "./types/config";

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? MiniCssExtractPlugin.loader : "style-loader",
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    }
                }
            },
            "sass-loader"
        ]
    };

    const babelLoader = {
        test: /\.(?:js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', { targets: "defaults" }]
                ],
                plugins: [
                    ["i18next-extract",
                        {
                            locales: [
                                "ru",
                                "en"
                            ],
                            keyAsDefaultValue: true
                        }
                    ]
                ]
            }
        }
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    };

    return [
        cssLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        fileLoader
    ];
}