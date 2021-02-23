import { setOutput } from '@webpack-blocks/webpack';
import { resolve } from 'path';

import type { Output } from '../types';

export const outputBlock = (options: Output) => {
    const outputOptions: Output = {
        devtoolModuleFilenameTemplate: 'webpack:///[resource-path]',
        environment: {
            arrowFunction: false,
            forOf: false,
            destructuring: false,
        },
        pathinfo: false,
        filename: 'bundle.min.js',
        libraryTarget: 'umd',
        path: resolve(process.cwd(), 'dist'),
        ...options,
    };
    return setOutput(outputOptions);
};
