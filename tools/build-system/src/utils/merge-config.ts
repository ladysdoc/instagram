import { Block } from '@webpack-blocks/webpack';
import type { Configuration } from 'webpack';

export const mergeConfig = <K extends keyof Configuration>(
    key: K,
    value: Configuration[K],
): Block => (_, utils) => utils.merge({ [key]: value });
