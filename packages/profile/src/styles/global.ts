import { css } from '@emotion/react';

export default css({
    html: {
        scrollBehavior: 'smooth',
        minHeight: '100%',
    },
    body: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '8px',
        fontWeight: 400,
        lineHeight: '1.5',
        '-webkit-font-smoothing': 'antialiased',
    },
});
