declare const BUILD_NUMBER: string;
declare const BUILD_TIME: string;
// declare const DEBUG: boolean;
declare const LOG_URL: string;
declare const LOG_PREFIX: string;

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly PUBLIC_URL: string;
    }
}
