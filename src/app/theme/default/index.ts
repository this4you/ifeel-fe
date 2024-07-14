import { createTheme, responsiveFontSizes } from '@mui/material';
import { defaultFonts } from './fonts.ts';

export const defaultTheme = responsiveFontSizes(createTheme({
    palette: {
      background: {
          default: '#F5F5F5'
      }
    },
    typography: {
        fontSize: 15,
        fontFamily: [
            ...defaultFonts
        ].join(','),
    },
}));
