import { addPlugins } from '@webpack-blocks/webpack';
import webpack from 'webpack';

import type { ModuleFederationOptions } from '../types';
import { recursion } from '../utils';

export const moduleFederationBlock = (
    { exposes, name, remotes, ...rest }: ModuleFederationOptions,
    polyfills: string[] = [],
) => {
    const exposesWithPolyfills = recursion(exposes, v =>
        [...polyfills].concat(v as any),
    );

    return addPlugins([
        new webpack.container.ModuleFederationPlugin({
            exposes: exposesWithPolyfills,
            filename: 'remoteEntry.js',
            name,
            remotes,
            remoteType: 'var',
            ...rest,
            shared: {
                ...rest.shared,
            },
        }),
    ]);
};
