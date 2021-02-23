import type { ProxyConfig } from '@ladysdoc/proxy-middleware';
import type { Configuration, default as webpack } from 'webpack';
import type WebpackDevServer from 'webpack-dev-server';
import type CopyWebpackPlugin from 'copy-webpack-plugin';

export type { Options as PageOptions } from 'html-webpack-plugin';

export interface DevServerOptions extends WebpackDevServer.Configuration {
    proxyTarget?: string;
    proxyConfig?: ProxyConfig;
}

export type ModuleFederationOptions = Required<
    ConstructorParameters<typeof webpack.container.ModuleFederationPlugin>
>[0];

type CopyPluginOptions = Required<
    ConstructorParameters<typeof CopyWebpackPlugin>
>[0];

export interface DeployOptions {
    copyFiles?: CopyPluginOptions['patterns'];
    copyOptions?: CopyPluginOptions['options'];
    mode?: 'development' | 'production';
}

export type Entry = Required<Configuration>['entry'];
export type Output = Required<Configuration>['output'];
export type Performance = Required<Configuration>['performance'];
export type Plugins = Required<Configuration>['plugins'];
export type Stats = Required<Configuration>['stats'];
