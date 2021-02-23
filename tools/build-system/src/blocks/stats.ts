import { Stats } from '../types';
import { mergeConfig } from '../utils';

const DEFAULT_STATS = {
    assets: false,
    assetsSort: 'name',
    builtAt: false,
    entrypoints: false,
    hash: false,
    modules: false,
    performance: false,
    version: false,
    warnings: false,
};

export const statsBlock = (stats: Stats | undefined) =>
    mergeConfig(
        'stats',
        typeof stats === 'object' || stats === undefined
            ? {
                  ...DEFAULT_STATS,
                  ...stats,
              }
            : stats,
    );
