import { Box } from '@mui/material';
import { EmotionSet } from '../../models/EmotionSet.ts';

export const EmotionsSetItem: React.FC<{ emotionSet: EmotionSet }> = () => {
    // const { spacing } = useTheme();

    return (
        <Box sx={{ width: '100%', height: '100px', }}>
            Emotion item
        </Box>
    );
}