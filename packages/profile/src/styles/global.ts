import { css } from '@emotion/react';

export default css({
    html: {
        scrollBehavior: 'smooth',
        minHeight: '100%',
    },
    '.visibility-hidden': {
        position: 'absolute',
        clip: 'rect(1px, 1px, 1px, 1px)',
        padding: '0!important',
        border: '0!important',
        height: '1px!important',
        width: '1px!important',
        overflow: 'hidden',
    },
});
