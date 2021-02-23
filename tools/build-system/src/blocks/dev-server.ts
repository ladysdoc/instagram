import createProxy from '@ladysdoc/proxy-middleware';
import { group } from '@webpack-blocks/webpack';

import type { DevServerOptions } from '../types';
import { mergeConfig } from '../utils';

export const devServerBlock = (options: DevServerOptions) => {
    const {
        contentBase,
        openPage = false,
        port = 8000,
        publicPath = '/',
        proxyTarget = '/',
        proxyConfig,
    } = options;

    const host = `http://127.0.0.1:${port}`;

    let page = typeof openPage === 'string' ? openPage : publicPath;

    if (page.startsWith('/')) {
        page = `${host}${page}`;
    } else if (!page.startsWith('http')) {
        page = `${host}/${page}`;
    }

    return group([
        mergeConfig('devServer', {
            before(app) {
                app.use(createProxy(app, proxyTarget, proxyConfig));
            },
            clientLogLevel: 'none',
            compress: true,
            contentBase,
            disableHostCheck: true,
            historyApiFallback: true,
            host: '0.0.0.0',
            hot: false,
            open: true,
            openPage: page,
            port,
            publicPath,
            quiet: false,
            watchContentBase: !!contentBase,
        }),
    ]);
};
