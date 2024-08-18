import { createTheme, css, responsiveFontSizes } from '@mui/material';
import { defaultFonts } from './fonts.ts';

//548368
export const defaultTheme = responsiveFontSizes(createTheme({
    palette: {
        background: {
            default: '#F5F5F5'
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: css`
                    text-transform: none;
                    border-radius: 2rem;
                `
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: css`
                    .MuiOutlinedInput-notchedOutline {
                        border-radius: 1em;
                    }
                `
            }
        }
    },
    typography: {
        fontSize: 15,
        fontFamily: [
            ...defaultFonts
        ].join(','),
    },
}));
