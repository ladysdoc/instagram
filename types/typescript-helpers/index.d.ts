declare const DEBUG: boolean;

declare namespace TS {
    type PickOne<T, K extends keyof T> = Pick<T, K> &
        { [P in keyof Omit<T, K>]?: never };

    type DeepPartial<T> = {
        [P in keyof T]?: T[P] extends Array<infer U>
            ? Array<DeepPartial<U>>
            : T[P] extends ReadonlyArray<infer U>
            ? ReadonlyArray<DeepPartial<U>>
            : DeepPartial<T[P]>;
    };

    type DeepUndefinedByNull<T> = {
        [P in keyof T]: null extends T[P]
            ? DeepUndefinedByNull<Exclude<T[P], null>> | undefined
            : T[P] extends Array<infer U>
            ? Array<DeepUndefinedByNull<U>>
            : T[P] extends ReadonlyArray<infer U>
            ? ReadonlyArray<DeepUndefinedByNull<U>>
            : DeepUndefinedByNull<T[P]>;
    };

    type DeepRequirdByNull<T> = {
        [P in keyof T]: null extends T[P]
            ? DeepRequirdByNull<Exclude<T[P], null>>
            : T[P] extends Array<infer U>
            ? Array<DeepRequirdByNull<U>>
            : T[P] extends ReadonlyArray<infer U>
            ? ReadonlyArray<DeepRequirdByNull<U>>
            : DeepRequirdByNull<T[P]>;
    };

    type PartialBy<P, K extends keyof P> = Omit<P, K> & Partial<Pick<P, K>>;

    type RequiredBy<P, K extends keyof P> = Omit<P, K> & Required<Pick<P, K>>;

    type InferThunkAction<Action> = Action extends (...args: infer P) => infer R
        ? (...args: P) => (...args: any[]) => R
        : Action;

    type PickActions<T extends {}, K extends keyof T> = {
        [C in K]: T[C] | InferThunkAction<T[C]>;
    };
}
