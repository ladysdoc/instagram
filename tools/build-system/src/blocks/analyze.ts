import { addPlugins } from '@webpack-blocks/webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const analyzeBlock = (options: boolean) => {
    const blocks = [];

    if (options) {
        blocks.push(new BundleAnalyzerPlugin());
    }
    return addPlugins(blocks);
};
