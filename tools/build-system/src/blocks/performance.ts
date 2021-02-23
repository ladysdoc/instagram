import { performance } from '@webpack-blocks/webpack';
import type { Performance } from '../types';

export const performanceBlock = (options: Performance | undefined) =>
    performance({ hints: false, ...options });
