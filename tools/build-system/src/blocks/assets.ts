import { match } from '@webpack-blocks/webpack';

export const assetsBlock = (assets: string[]) =>
    match(assets, [
        ({ match }, { addLoader }) =>
            addLoader({
                type: 'asset',
                ...match,
            }),
    ]);
