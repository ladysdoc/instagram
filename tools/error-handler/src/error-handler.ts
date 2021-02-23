export interface AugmentedError<DictKeys extends string> {
    type?: string;
    message?: string;
    text?: DictKeys;
    title?: DictKeys;
}

/**  */
export const createCustomError = <DictKeys extends string = string>(
    error: Error & AugmentedError<DictKeys>,
    addendum?: AugmentedError<DictKeys> | string,
): Error & AugmentedError<DictKeys> => {
    const addendumMessage =
        typeof addendum === 'object' ? addendum.message : addendum;

    if (addendumMessage) {
        error.message = `${addendumMessage} (${error.message})`;
    }

    if (typeof addendum === 'object') {
        error.type = addendum.type;
        error.text = addendum.text;
        error.title = addendum.title;
    }
    return error;
};

/** */
export const throwCustomError = <DictKeys extends string = string>(
    error: Error,
    addendum?: AugmentedError<DictKeys> | string,
) => () => {
    throw createCustomError(error, addendum);
};

/** */
export const captureException = (error: any) => {
    try {
        if (!DEBUG) {
            // todo error logging
            console.warn(error);
            return;
        }
    } catch (_) {}
    console.warn(error);
};
