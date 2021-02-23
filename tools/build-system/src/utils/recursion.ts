export const recursion = <V = unknown>(
    value: V,
    replacer: (v: unknown) => any,
): V => {
    if (Array.isArray(value) || typeof value !== 'object') {
        return replacer(value);
    }
    const o = Object.assign({}, value);
    return Object.entries(o).reduce(
        (acc, [k, v]) => ({
            ...acc,
            [k]: recursion(v as V, replacer),
        }),
        o,
    );
};
