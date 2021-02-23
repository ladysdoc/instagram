import { SuboConfig } from '@ladysdoc/build-system';
import { join, resolve, basename } from 'path';

const projectName = basename(process.cwd());

const webpackConfig = new SuboConfig({
    entry: resolve(__dirname, './src/index.tsx'),
    output: {
        publicPath: `/${projectName}/`,
    },
})
    .constants({
        STATIC_DIRECTORY: `${projectName}/`,
    })
    .deploy({
        copyFiles: [{ from: 'public', to: './' }], // to dist directory
    })
    .devServer({
        contentBase: [join(__dirname, 'public')],
        port: 8000,
        publicPath: `/${projectName}/`,
    })
    // use `analyze(true)` to profile bundle size like this:
    .analyze(false)
    .build();

export default webpackConfig;
