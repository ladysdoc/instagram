import { BROWN, GREY, TILL, CREAM } from './colors';

const SPACING = 8;

const BREAKPOINTS = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1280,
};

export const theme = (spacing = SPACING) => ({
    palette: {
        primary: GREY.main,
        secondary: GREY[90],
        brown: { ...BROWN },
        grey: { ...GREY },
        till: {
            ...TILL,
        },
        cream: {
            ...CREAM,
        },
    },
    spacing(...args: number[]): string {
        const result: string[] = [];
        const factors = [].slice.apply(args).slice(0, 4);

        while (factors.length) {
            const factor = factors.shift();
            if (typeof factor === 'number') {
                result.push(`${factor * spacing}px`);
            }
        }
        return result.length ? result.join(' ') : '0';
    },
    typography: {
        serif: {
            fontFamily: 'Cormorant Unicase, serif',
        },
        sans: {
            fontFamily: 'Montserrat, sans-serif;',
        },
    },
    height: {
        stickyMeny: 80,
    },
    width: {
        xs: `@media (max-width: ${BREAKPOINTS.sm - 1}px)`,
        sm: `@media (min-width: ${BREAKPOINTS.sm}px)`,
        md: `@media (min-width: ${BREAKPOINTS.md}px)`,
        lg: `@media (min-width: ${BREAKPOINTS.lg}px)`,
        xl: `@media (min-width: ${BREAKPOINTS.xl}px)`,
        mobile: `@media (max-width: ${BREAKPOINTS.md - 1}px)`,
        desktop: `@media (min-width: ${BREAKPOINTS.md}px)`,
    },
    zIndex: {
        header: 5,
        menu: 7,
        modal: 15,
    },
});

export default theme();
