import { entryPoint } from '@webpack-blocks/webpack';
import { Entry } from '../types';
import { mergeConfig } from '../utils';

type FinalEntry = [string, ...string[]];

const isFinalEntry = (entry: any): entry is FinalEntry =>
    Array.isArray(entry) && typeof entry[0] === 'string';

export const entryBlock = (entry: Entry) => {
    let finalEntry: FinalEntry | undefined;

    if (typeof entry === 'string') {
        finalEntry = [entry];
    } else if (isFinalEntry(entry)) {
        finalEntry = entry;
    } else {
        finalEntry = undefined;
    }

    return finalEntry ? mergeConfig('entry', finalEntry) : entryPoint(entry);
};
