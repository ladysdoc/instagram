import type { ModuleFederationOptions, PageOptions } from '../types';
import {
    assetsBlock,
    babelBlock,
    moduleFederationBlock,
    pageBlock,
    polyfillsBlock,
} from '../blocks';
import { BaseConfig } from './base-config';

export class SuboConfig extends BaseConfig {
    #assets = ['*.svg', '*.png', '*.gif', '*.jpg', '*.jpeg'];
    #moduleFederation?: ModuleFederationOptions;
    #pageOptions?: PageOptions;
    #polyfills: string[] = [
        '@webcomponents/webcomponentsjs/webcomponents-bundle',
        '@webcomponents/webcomponentsjs/custom-elements-es5-adapter',
    ];

    /** */
    protected getBlocks() {
        const blocks = [
            ...super.getBlocks(),
            assetsBlock(this.#assets),
            babelBlock(),
            polyfillsBlock(this.#polyfills),
        ];

        if (this.#pageOptions) {
            blocks.push(pageBlock(this.#pageOptions));
        }

        if (this.#moduleFederation) {
            blocks.push(
                moduleFederationBlock(this.#moduleFederation, this.#polyfills),
            );
        }

        return blocks;
    }

    /**
     * Public API
     */

    /** */
    moduleFederation(config: ModuleFederationOptions) {
        this.#moduleFederation = config;
        return this;
    }

    /** */
    page(options: PageOptions) {
        this.#pageOptions = options;
        return this;
    }

    /** */
    polyfills(polyfills: string[]) {
        this.#polyfills = [...this.#polyfills, ...polyfills];
        return this;
    }
}
