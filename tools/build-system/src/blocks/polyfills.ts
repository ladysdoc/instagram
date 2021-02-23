import { addPlugins } from '@webpack-blocks/webpack';

import { InjectEntriesPlugin } from '../plugins';

export const polyfillsBlock = (polyfills: string[] = []) =>
    addPlugins([new InjectEntriesPlugin(polyfills)]);
