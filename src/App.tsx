import '@fontsource-variable/comfortaa';
import { defaultTheme } from './app/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouters } from './app/routes/AppRouters.tsx';


function App() {
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline/>
                <AppRouters/>
            </ThemeProvider>
        </>
    )
}

export default App
