import { addPlugins } from '@webpack-blocks/webpack';
import TerserPlugin from 'terser-webpack-plugin';

export const optimizationBlock = () =>
    addPlugins([
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                compress: {
                    inline: false,
                },
                safari10: true,
            },
        }),
    ]);
