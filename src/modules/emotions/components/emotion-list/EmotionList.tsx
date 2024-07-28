import { Box, useTheme } from '@mui/material';

export const EmotionsList: React.FC = () => {
    const { palette } = useTheme();

    return (
        <Box sx={{
            width: '180px',
            height: '100%',
            borderRight: `1px solid ${palette.divider}`
        }}>

        </Box>
    );
}