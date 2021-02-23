export const getBuildNumber = () => {
    const {
        npm_package_version = 'unknown',
        BUILD_ID = 'development',
    } = process.env;

    return `${npm_package_version}.${BUILD_ID}`;
};
