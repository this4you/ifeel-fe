import { Box, useTheme } from '@mui/material';
import { EmotionsSets } from './emotions-set/EmotionsSets.tsx';
import { EmotionsList } from './emotion-list/EmotionList.tsx';
import { useEmotionSetsStore } from '../state/useEmotionSetsStore.ts';
import { MoodSelector } from './mood-selector/MoodSelector.tsx';

export const Emotions: React.FC = () => {
    const { palette } = useTheme();
    const { isMoodSelectorVisible } = useEmotionSetsStore();

    return (
        <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
            <EmotionsSets/>
            <Box sx={{
                display: 'flex',
                height: '100%',
                backgroundColor: palette.common.white,
                flex: '1',
                borderLeft: `1px solid ${palette.divider}`,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {
                    isMoodSelectorVisible
                        ? <MoodSelector/>
                        : (
                            <Box sx={{
                                display: 'flex',
                                width: '100%',
                                height: '100%',
                            }}>
                                <EmotionsList/>
                            </Box>
                        )
                }
            </Box>
        </Box>
    );
}
