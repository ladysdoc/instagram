import { css } from '@emotion/react';
import theme from '../../styles/theme';

export default css({
    width: '100%',

    '.container': {
        boxSizing: 'border-box',
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        position: 'relative',
        width: '100%',

        [theme.width.lg]: {
            maxWidth: 962,
            width: '83.33%',
        },

        [theme.width.xl]: {
            maxWidth: 1250,
            width: '75%',
        },
    },

    '.row': {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: '-1rem',
        marginRight: '-1rem',
    },

    '.cal': {
        boxSizing: 'border-box',
        flex: '0 0 auto',
        flexBasis: '100%',
        maxWidth: '100%',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        width: '100%',

        [theme.width.md]: {
            marginLeft: '8.333%',
            maxWidth: '83.333%',
            width: '83.333%',
        },
        [theme.width.lg]: {
            marginLeft: '16.667%',
            maxWidth: '66.667%',
            width: '66.667%',
        },
    },

    '.go-back': {
        alignItems: 'center',
        borderBottom: 'solid 1px',
        background: theme.palette.cream.main,
        borderBottomColor: theme.palette.grey[20],
        display: 'flex',
        height: 44,
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 1,

        '& .link': {
            background:
                'no-repeat center center url("https://ladysdoc.cdn.prismic.io/ladysdoc/dd953f8c-fad4-4bd2-807b-baf7af7fa1e3_arrow.svg")',
            backgroundSize: '25%',
            cursor: 'pointer',
            flexBasis: 44,
            flexGrow: 0,
            height: 44,
            position: 'relative',
            width: 44,
            textDecoration: 'none',
        },

        '& .title': {
            flexGrow: 1,
            fontSize: '1rem',
            textAlign: 'center',
        },
    },

    '.block-item': {
        paddingBottom: '.5rem',
        paddingTop: '.5rem',
    },

    '.block-break': {
        alignItems: 'center',
        display: 'flex',
        height: 30,
        justifyContent: 'center',
        position: 'relative',

        '& span:before, & span:after': {
            background: '#000',
            content: '""',
            height: '1px',
            opacity: '.3',
            position: 'absolute',
            top: '49%',
            width: '10%',
        },

        '& span:before': {
            transform: 'translate(-100%,0)',
        },

        '&.has-icon': {
            '& span:before': {
                transform: 'translate(-120%,0)',
            },

            '& span:after': {
                transform: 'translate(20%,0)',
            },
        },
    },

    '.block-text': {
        fontSize: '1.48rem',
        lineHeight: '1.4',
        textAlign: 'center',
    },

    '.block-button': {
        border: '2px solid transparent',
        borderRadius: '2px',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '2em',
        height: 'auto',
        lineHeight: '1.2',
        minHeight: '60px',
        padding: '16px',
        position: 'relative',
        textAlign: 'center',
        textDecoration: 'none!important',
        whiteSpace: 'normal',
        width: '100%',

        '&.brown': {
            background: theme.palette.brown.main,
            borderColor: theme.palette.brown.main,
            color: 'rgb(255, 255, 255)',
        },

        '&.till': {
            background: theme.palette.till.main,
            borderColor: theme.palette.till.main,
            color: 'rgb(255, 255, 255)',
        },

        '&.grey': {
            background: theme.palette.grey.main,
            borderColor: theme.palette.grey.main,
            color: 'rgb(255, 255, 255)',
        },

        '&.cream': {
            background: theme.palette.cream.main,
            borderColor: theme.palette.cream.main,
            color: 'rgb(255, 255, 255)',
        },

        '& .title': {
            color: theme.palette.grey.white,
            fontWeight: 400,
        },

        '& .subtitle': {
            fontSize: '60%',
            marginTop: '.2rem',
            opacity: 0.7,
        },
    },
});
