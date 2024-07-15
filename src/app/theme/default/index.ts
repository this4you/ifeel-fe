import { createTheme, responsiveFontSizes } from '@mui/material';
import { defaultFonts } from './fonts.ts';

//548368
export const defaultTheme = responsiveFontSizes(createTheme({
    palette: {
      background: {
          default: '#F5F5F5'
      },
        // primary: {
        //   main: '#548368'
        // }
    },
    typography: {
        fontSize: 15,
        fontFamily: [
            ...defaultFonts
        ].join(','),
    },
}));
