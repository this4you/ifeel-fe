import '@fontsource-variable/comfortaa';
import { defaultTheme } from './app/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouters } from './app/routes/AppRouters.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AppLoader } from '@commons/components/AppLoader.tsx';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


function App() {
    return (
        <>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
                <ThemeProvider theme={defaultTheme}>
                    <CssBaseline/>
                    <AppRouters/>
                    <AppLoader/>
                </ThemeProvider>
            </GoogleOAuthProvider>
        </>
    )
}

export default App
