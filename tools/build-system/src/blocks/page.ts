import { addPlugins } from '@webpack-blocks/webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import type { PageOptions } from '../types';

export const pageBlock = (options: PageOptions) =>
    addPlugins([new HtmlWebpackPlugin(options)]);
