import '@fontsource-variable/comfortaa';
import { defaultTheme } from './app/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';


function App() {
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline/>
                <h1>I feel app</h1>
            </ThemeProvider>
        </>
    )
}

export default App
