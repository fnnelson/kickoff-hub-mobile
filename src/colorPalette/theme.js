import { colors } from './colors';

export const navigationTheme = {
    dark: false,
    colors: {

        // still need to map these to the colors
        primary: colors.green,
        background: colors.white,
        card: colors.white,
        text: colors.black,
        border: colors.green,
        notification: colors.yellow,
    },
};

export const theme = {
    colors,

    // haven't tweaked these yet, but could be useful
    spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
    borderRadius: { sm: 4, md: 8, lg: 12 },
    typography: {
        header: { fontSize: 24, fontWeight: 'bold' },
        subheader: { fontSize: 18, fontWeight: '600' },
        body: { fontSize: 14, fontWeight: 'normal' }
    },
};