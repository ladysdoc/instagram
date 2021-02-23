/**
 * UnusedFilesWebpackPlugin is not compatible wit Webpack 5 yet
 */
import { addPlugins, group } from '@webpack-blocks/webpack';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
//import { UnusedFilesWebpackPlugin } from 'unused-files-webpack-plugin';

// wotan-disable-next-line
export const qualityBlock = (ignoreUnusedFiles: string[] = []) =>
    group([
        addPlugins([new CaseSensitivePathsPlugin()]),
        // env('development', [
        //     addPlugins([
        //         new UnusedFilesWebpackPlugin({
        //             failOnUnused: false,
        //             globOptions: {
        //                 ignore: ignoreUnusedFiles,
        //             },
        //         }),
        //     ]),
        // ]),
        // env('production', [
        //     addPlugins([
        //         new UnusedFilesWebpackPlugin({
        //             failOnUnused: true,
        //             globOptions: {
        //                 ignore: ignoreUnusedFiles,
        //             },
        //         }),
        //     ]),
        // ]),
    ]);
