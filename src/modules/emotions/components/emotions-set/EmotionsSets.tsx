import { Box, Stack, Typography, useTheme } from '@mui/material';
import { MdOutlineCreate } from 'react-icons/md';
import { RiMenuSearchLine } from 'react-icons/ri';
import { CiViewList } from 'react-icons/ci';
import { useEmotionSetsStore } from '../../state/useEmotionSetsStore.ts';
import { EmotionsSetItem } from './EmotionsSetItem.tsx';
import { useInitEmotionSets } from '../../use-cases/useInitEmotionSets.ts';
import { useEffect } from 'react';

export const EmotionsSets: React.FC = () => {
    const { spacing, palette } = useTheme();
    const { emotionSets } = useEmotionSetsStore();

    const initEmotionSets = useInitEmotionSets();

    useEffect(() => {
        console.log('USE EFFECT ')
        initEmotionSets()
    }, []);

    return (
        <Box sx={{ width: '250px', height: '100%', }}>
            <Box padding={spacing(3)}>
                <Stack direction="row" justifyContent="space-between" alignItems={'center'}>
                    <Typography variant="subtitle1">
                        Emotions
                    </Typography>
                    <Stack direction={'row'} spacing="10px">
                        <MdOutlineCreate size={'20px'} cursor={'pointer'}/>
                        <RiMenuSearchLine size={'20px'} cursor={'pointer'}/>
                    </Stack>
                </Stack>
            </Box>
            {
                emotionSets.length === 0 && (
                    <Box
                        sx={{
                            display: 'flex',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Stack alignItems={'center'} marginTop={'-100px'}>
                            <CiViewList
                                size={'50px'}
                                color={palette.text.primary}
                            />
                            <Typography variant={'subtitle1'}>
                                No emotions :(
                            </Typography>
                        </Stack>
                    </Box>
                )
            }
            {
                emotionSets.length > 0 && (
                    <Stack direction={'column'}>
                        {
                            emotionSets.map(emotionSet => (
                                <EmotionsSetItem emotionSet={emotionSet}/>
                            ))
                        }
                    </Stack>
                )
            }
        </Box>
    );
}