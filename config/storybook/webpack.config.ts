/* eslint-disable no-return-assign */
import path from "path";
import { BuildPaths } from "../build/types/config";
import webpack, { DefinePlugin } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };

    if (config.module?.rules) {
        config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule | "...") => {
            if (rule !== "..." && /svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });
    }

    config.module?.rules?.push(buildCssLoader(true));
    config.module?.rules?.push(buildSvgLoader());

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    config.plugins?.push(new MiniCssExtractPlugin());
    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook')
    }));

    return config;
};