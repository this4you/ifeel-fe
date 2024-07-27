import { alpha, Box, CircularProgress, Fade, useTheme } from '@mui/material';
import { useAppLoadingStore } from '@commons/state/useAppLoadingStore.ts';

export const AppLoader: React.FC = () => {
    const { isLoading } = useAppLoadingStore();
    const { palette } = useTheme();

    return (
        <Fade in={isLoading}>
            <Box sx={{
                zIndex: '1000',
                display: 'flex',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: alpha(palette.primary.main, 0.8)
            }}>
                <CircularProgress size={60} sx={{ color: palette.common.white }}/>
            </Box>
        </Fade>
    )
}