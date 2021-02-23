import { css } from '@emotion/react';
import theme from '../../styles/theme';

export default css({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 44,
    overflow: 'hidden',
    padding: 16,
    position: 'relative',

    '.profile': {
        display: 'flex',
        flexDirection: 'column',
        padding: '16px 16px 0 16px',
    },

    '.avatar': {
        alignItems: 'stretch',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'stretch',
        height: 91,
        background:
            'no-repeat center center url("https://images.prismic.io/ladysdoc/60c42de0-2c1e-4a31-a6f4-47ea41d37eaf_download.png?auto=compress,format")',
        backgroundSize: 'cover',
        left: 32,
        padding: 8,
        position: 'absolute',
        top: 32,
        width: 91,

        [theme.width.md]: {
            height: 168,
            left: 64,
            width: 168,
        },

        '& i': {
            background:
                'center center no-repeat url("https://images.prismic.io/ladysdoc/0e00d5eb-6026-4700-a50b-2a35fd3c142e_150915322_1028019201053591_4068432196761274998_n.jpg?auto=compress,format")',
            backgroundSize: 'cover',
            borderRadius: '50%',
            display: 'block',
            flexGrow: 1,
        },
    },

    '.title': {
        fontSize: '28px',
        color: theme.palette.grey[70],
        paddingLeft: 105,

        [theme.width.md]: {
            paddingLeft: 240,
        },
    },

    '.services': {
        paddingTop: 72,
        fontSize: '1rem',
        whiteSpace: 'pre',

        [theme.width.md]: {
            paddingTop: 24,
            paddingLeft: 240,
        },
    },
});
