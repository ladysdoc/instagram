import { createConfig } from '@webpack-blocks/webpack';

import type {
    DeployOptions,
    DevServerOptions,
    Entry,
    Output,
    Performance,
    Stats,
} from '../types';

import {
    analyzeBlock,
    deployBlock,
    devServerBlock,
    entryBlock,
    environmentBlock,
    outputBlock,
    performanceBlock,
    qualityBlock,
    statsBlock,
    typescriptBlock,
} from '../blocks';

import { name as packageName } from '../../package.json';

export class BaseConfig {
    // output bundle structure as json for analyzer
    #analyze = false;
    // webpack defined constants
    #constants?: { [key: string]: any };
    // deploy options
    #deploy?: DeployOptions;
    // webpack-dev-server options
    #devServerOptions?: DevServerOptions;
    // webpack entry config
    #entry: Entry;
    // ignore unused files pattern
    #ignoreUnusedFiles?: string[];
    // prefix for log entries
    #logPrefix = process.env.npm_package_name || packageName;
    // logging system url
    #logUrl = '';
    // webpack output config
    #output: Output;
    // webpack performance
    #performance?: Performance;
    // webpack stats
    #stats?: Stats;

    /** */
    constructor({ entry, output }: { entry: Entry; output: Output }) {
        this.#entry = entry;
        this.#output = output;
    }

    /** */
    protected getBlocks() {
        const blocks = [
            analyzeBlock(this.#analyze),
            deployBlock(this.#deploy),
            entryBlock(this.#entry),
            environmentBlock({
                LOG_URL: this.#logUrl,
                LOG_PREFIX: this.#logPrefix,
                ...this.#constants,
            }),
            outputBlock(this.#output),
            performanceBlock(this.#performance),
            qualityBlock(this.#ignoreUnusedFiles),
            statsBlock(this.#stats),
            typescriptBlock(),
        ];

        // devServer
        const isDevServer = process.argv.some(value =>
            value.includes('webpack-dev-server'),
        );
        if (isDevServer && this.#devServerOptions) {
            blocks.push(devServerBlock(this.#devServerOptions));
        }

        return blocks;
    }

    /**
     * Public API
     */

    /** */
    analyze(value = true) {
        this.#analyze = value;
        return this;
    }

    /** */
    build() {
        return createConfig(this.getBlocks());
    }

    /** */
    constants(constants: { [key: string]: any }) {
        this.#constants = constants;
        return this;
    }

    deploy(deploy: DeployOptions) {
        this.#deploy = deploy;
        return this;
    }

    /** */
    devServer(options: DevServerOptions) {
        this.#devServerOptions = options;
        return this;
    }

    /** */
    ignoreUnused(patterns: string[]) {
        this.#ignoreUnusedFiles = patterns;
    }

    /** */
    logging(url: string, prefix?: string) {
        this.#logUrl = url;

        if (prefix) {
            this.#logPrefix = prefix;
        }
        return this;
    }

    /** */
    performance(performance: Performance) {
        this.#performance = performance;
        return this;
    }

    /** */
    stats(stats: Stats) {
        this.#stats = stats;
    }
}
