import { group, match, resolve } from '@webpack-blocks/webpack';

export const typescriptBlock = () =>
    group([
        resolve({
            extensions: ['.ts', '.tsx'],
            modules: ['node_modules'],
        }),
        match(['*.ts', '*.tsx'], { exclude: /node_modules\/(?!@vtb)/ }, [
            ({ match }, { addLoader }) =>
                addLoader({
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                transpileOnly: true,
                            },
                        },
                    ],
                    ...match,
                }),
        ]),
    ]);
