import { addPlugins, group, match } from '@webpack-blocks/webpack';
import { NormalModuleReplacementPlugin } from 'webpack';

// This block is for IE11 support
export const babelBlock = () =>
    group([
        // next modules are supplied with ie11 bundles
        addPlugins([
            new NormalModuleReplacementPlugin(
                /react-hook-form[\/\\]dist[\/\\]index.esm.js/,
                'index.ie11.js',
            ),
            new NormalModuleReplacementPlugin(
                /little-state-machine[\/\\]dist[\/\\]little-state-machine.es.js/,
                'little-state-machine.ie11.js',
            ),
        ]),
        // next modules need to be converted
        match(
            [
                '*node_modules/@hookform/devtools/dist/*.js',
                '*node_modules\\@hookform\\devtools\\dist\\*.js',

                '*node_modules/@emotion/core/dist/*.js',
                '*node_modules\\@emotion\\core\\dist\\*.js',
                '*node_modules/@emotion/css/dist/*.js',
                '*node_modules\\@emotion\\css\\dist\\*.js',
                '*node_modules/@emotion/stylis/dist/*.js',
                '*node_modules\\@emotion\\stylis\\dist\\*.js',

                '*node_modules/ajv*/dist/*.js',
                '*node_modules\\ajv*\\dist\\*.js',
                '*node_modules/react-simple-animate/dist/*.js',
                '*node_modules\\react-simple-animate\\dist\\*.js',
            ],
            [
                ({ match }, { addLoader }) =>
                    addLoader({
                        use: [
                            {
                                loader: 'babel-loader',
                                options: {
                                    presets: [
                                        [
                                            '@babel/preset-env',
                                            {
                                                targets: { ie: '11' },
                                                debug: false,
                                            },
                                        ],
                                    ],
                                },
                            },
                        ],
                        ...match,
                    }),
            ],
        ),
    ]);
