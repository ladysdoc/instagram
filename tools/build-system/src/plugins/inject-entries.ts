import { Compiler } from 'webpack';
import { recursion } from '../utils';

export class InjectEntriesPlugin {
    constructor(private readonly modules: string[]) {}

    apply(compiler: Compiler) {
        compiler.options.entry = recursion(compiler.options.entry, v =>
            [...this.modules].concat(v as []),
        );
    }
}
