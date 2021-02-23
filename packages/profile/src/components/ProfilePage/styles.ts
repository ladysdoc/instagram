import { css } from '@emotion/react';
import theme from '../../styles/theme';

export default css({
    width: '100%',

    [theme.width.md]: {
        width: '83.33%',
    },

    [theme.width.lg]: {
        width: '66.667%',
    },
});
