import { Box, Stack, useTheme } from '@mui/material';
import { MdDeleteOutline, MdOutlineCreate } from 'react-icons/md';
import { useInitEmotions } from '../../use-cases/useInitEmotions.ts';
import { useEffect } from 'react';
import { useEmotionSetsStore } from '../../state/useEmotionSetsStore.ts';
import { useEmotionsStore } from '../../state/useEmotionsStore.ts';
import { EmotionItem } from './EmotionItem.tsx';
import { useAddNewEmotion } from '../../use-cases/useAddNewEmotion.ts';

export const EmotionsList: React.FC = () => {
    const { palette } = useTheme();
    const { activeEmotionSetId } = useEmotionSetsStore();
    const { isNewEmotionVisible, emotions, activeEmotionId } = useEmotionsStore();

    const addNewEmotion = useAddNewEmotion();

    const initEmotions = useInitEmotions();

    useEffect(() => {
        if (activeEmotionSetId) {
            initEmotions(activeEmotionSetId);
        }
    }, [activeEmotionSetId]);

    return (
        <Box sx={{
            width: '180px',
            height: '100%',
            borderRight: `1px solid ${palette.divider}`
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '75px',
            }}>
                <Stack
                    direction="row"
                    justifyContent="end"
                    alignItems={'center'}
                    width={'80%'}
                >
                    <Stack direction={'row'} spacing="10px">
                        <MdOutlineCreate
                            size={'20px'}
                            onClick={addNewEmotion}
                            cursor={'pointer'}
                        />
                        <MdDeleteOutline
                            size={'20px'}
                            cursor={'pointer'}
                        />
                    </Stack>
                </Stack>
            </Box>
            <Stack direction={'column'} alignItems={'center'}>
                {isNewEmotionVisible && (
                    <EmotionItem emotion={{ name: 'New emotion' }} isActive/>
                )}
                {
                    emotions.length > 0 && (
                        <>
                            {
                                emotions.map(emotion => (
                                    <EmotionItem
                                        key={emotion.id}
                                        emotion={emotion}
                                        isActive={activeEmotionId === emotion.id}
                                    />
                                ))
                            }
                        </>
                    )
                }
            </Stack>
        </Box>
    );
}