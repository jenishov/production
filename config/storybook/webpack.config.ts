import webpack, { DefinePlugin } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loader/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    // --- гарантируем, что поля существуют ---
    config.resolve = config.resolve || {};
    config.resolve.modules = (config.resolve.modules || ['node_modules']) as string[];
    config.resolve.extensions = (config.resolve.extensions || ['.js', '.jsx']) as string[];

    config.module = config.module || {};
    config.module.rules = (config.module.rules || []) as webpack.RuleSetRule[];

    config.plugins = config.plugins || [];

    // --- пути и расширения ---
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    // --- правим svg-правило (и не падаем, если там строка '...') ---
    config.module.rules = config.module.rules.map((rule: any) => {
        if (typeof rule === 'string') {
            // Storybook-маркер '...'
            return rule;
        }

        if (rule.test && /svg/.test(rule.test.toString())) {
            return {
                ...rule,
                exclude: /\.svg$/i,
            };
        }

        return rule;
    });

    // своё svg-правило через svgr
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    // css/scss-loader из сборки
    config.module.rules.push(buildCssLoader(true));

    // DefinePlugin для глобальных констант
    config.plugins.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
