import { RequestHandler, compose } from 'compose-middleware';
import type { Application, Request, Response } from 'express';
import { IncomingMessage } from 'http';
import { Filter, Options, createProxyMiddleware } from 'http-proxy-middleware';

export type ProxyConfig = Array<{
    context: Filter;
    options: Options;
}>;

export default (
    _app: Application,
    target: string,
    applicationProxyConfig: ProxyConfig = [],
): RequestHandler<Request, Response> => {
    const proxyRules: ProxyConfig = [
        ...applicationProxyConfig,
        /** DSO apis */
        {
            context: ['/api', '/core', '/auth'],
            options: {
                changeOrigin: true,
                cookieDomainRewrite: {
                    '*': '',
                },
                logLevel: 'warn',
                onProxyRes(proxyRes: IncomingMessage) {
                    if (
                        'set-cookie' in proxyRes.headers &&
                        Array.isArray(proxyRes.headers['set-cookie'])
                    ) {
                        proxyRes.headers['set-cookie'] = proxyRes.headers[
                            'set-cookie'
                        ].map(cookie => cookie.replace(/[Ss]ecure\s*;?/, ''));
                    }
                },
                secure: false,
                ssl: {
                    rejectUnauthorized: false,
                    requestCert: false,
                },
                target,
            },
        },
    ];

    return compose(
        proxyRules.map(
            ({ context, options }) =>
                createProxyMiddleware(context, options) as RequestHandler<
                    Request,
                    Response
                >,
        ),
    );
};
