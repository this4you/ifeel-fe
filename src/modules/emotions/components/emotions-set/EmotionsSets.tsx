import { Box, Stack, Typography, useTheme } from '@mui/material';
import { MdOutlineCreate } from 'react-icons/md';
import { MdDeleteOutline } from 'react-icons/md';
import { LuDownloadCloud } from "react-icons/lu";
import { CiViewList } from 'react-icons/ci';
import { useEmotionSetsStore } from '../../state/useEmotionSetsStore.ts';
import { EmotionsSetItem } from './EmotionsSetItem.tsx';
import { useInitEmotionSets } from '../../use-cases/useInitEmotionSets.ts';
import { useEffect } from 'react';
import { useDeleteActiveEmotionSet } from '../../use-cases/useDeleteActiveEmotionSet.ts';
import { useDisplayMoodSelector } from '../../use-cases/useDisplayMoodSelector.ts';
import { useExportReport } from '../../use-cases/useExportReport.ts';

export const EmotionsSets: React.FC = () => {
    const {  palette } = useTheme();
    const { emotionSets, activeEmotionSetId } = useEmotionSetsStore();

    const displayMoodSelector = useDisplayMoodSelector();
    const deleteActiveEmotionSet = useDeleteActiveEmotionSet();
    const initEmotionSets = useInitEmotionSets();
    const exportReport = useExportReport();

    useEffect(() => {
        initEmotionSets()
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '250px',
            height: '100%',
        }}
        >
            <Box sx={{
                display: 'flex',
                justifyContent:'center',
                width: '100%',
                height: '75px',
            }}>
                <Stack
                    width={'80%'}
                    direction="row"
                    justifyContent="space-between"
                    alignItems={'center'}
                >
                    <Typography variant="subtitle1">
                        Emotions
                    </Typography>
                    <Stack direction={'row'} spacing="10px">
                        <MdOutlineCreate
                            size={'20px'}
                            cursor={'pointer'}
                            onClick={displayMoodSelector}
                        />
                        <LuDownloadCloud
                            size={'20px'}
                            cursor={'pointer'}
                            onClick={exportReport}
                        />
                        {activeEmotionSetId &&
                            <MdDeleteOutline
                                size={'20px'}
                                cursor={'pointer'}
                                onClick={deleteActiveEmotionSet}
                            />
                        }
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
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        overflowY: 'auto'
                    }}>
                        {
                            emotionSets.map(emotionSet => (
                                <EmotionsSetItem key={emotionSet.id} emotionSet={emotionSet}/>
                            ))
                        }
                    </Box>
                )
            }
        </Box>
    );
}