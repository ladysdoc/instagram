import { defineConstants, env, group } from '@webpack-blocks/webpack';

import { getBuildNumber, mergeConfig } from '../utils';
import { optimizationBlock } from './optimization';

export const environmentBlock = (constants?: { [key: string]: any }) =>
    group([
        env('development', [
            defineConstants({ DEBUG: true }),
            mergeConfig('mode', 'development'),
            mergeConfig('devtool', 'inline-source-map'),
        ]),
        env('production', [
            defineConstants({ DEBUG: false }),
            mergeConfig('mode', 'production'),
            optimizationBlock(),
        ]),
        defineConstants({
            BUILD_NUMBER: getBuildNumber(),
            BUILD_TIME: new Date().toUTCString(),
            ...constants,
        }),
    ]);
