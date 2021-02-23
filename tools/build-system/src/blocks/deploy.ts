import { addPlugins, Block, env, group } from '@webpack-blocks/webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import type { DeployOptions } from '../types';

export const deployBlock = (options?: DeployOptions) => {
    const blocks: Block[] = [addPlugins([new CleanWebpackPlugin()])];

    if (options) {
        const { copyFiles, copyOptions, mode } = options;

        if (copyFiles) {
            const block = addPlugins([
                new CopyWebpackPlugin({
                    options: copyOptions,
                    patterns: copyFiles,
                }),
            ]);

            blocks.push(mode ? env(mode, [block]) : block);
        }
    }

    return group(blocks);
};
