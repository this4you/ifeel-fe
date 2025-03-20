import React, { useCallback, useState } from 'react';
import { Box, Divider, Drawer, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { AiEmotionAnalyzerButton } from '@emotions/components/emotion-list/AiEmotionAnalyzerButton.tsx';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { PiMaskHappy } from 'react-icons/pi';
import { EmotionAnalyzerItem } from './EmotionAnalyzerItem.tsx';
import { FaTheaterMasks } from 'react-icons/fa';
import { BsCalendar2Date, BsCalendar2Month } from 'react-icons/bs';
import { useEmotionsStore } from '@emotions/state/useEmotionsStore.ts';
import { useEmotionSetsStore } from '@emotions/state/useEmotionSetsStore.ts';
import { useAiEmotionAnalyzerStore } from '../../state/useAiEmotionAnalyzerStore.ts';
import { EmotionAnalyzeResultCard } from './EmotionAnalyzeResultCard.tsx';
import { useAnalyzeCurrentEmotion } from '../../use-cases/useAnalyzeCurrentEmotion.ts';
import { useAnalyzeCurrentEmotionSet } from '../../use-cases/useAnalyzeCurrentEmotionSet.ts';
import { EmotionPeriodPickerModal } from "@analysis/components/emotio-period-picker-modal/EmotionPeriodPickerModal.tsx";

export const EmotionAnalyzerDrawer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEmotionPeriodModalOpen, setIsEmotionPeriodModalOpen] = useState(false)
    const { activeEmotionId } = useEmotionsStore();
    const { activeEmotionSetId } = useEmotionSetsStore();
    const { emotionAnalyzeResult, isLoading } = useAiEmotionAnalyzerStore();

    const analyzeCurrentEmotion = useAnalyzeCurrentEmotion();
    const analyzeCurrentEmotionSet = useAnalyzeCurrentEmotionSet();

    const openAnalyzeEmotionPeriodModal = useCallback(() => {
        setIsEmotionPeriodModalOpen(true)
    }, [setIsEmotionPeriodModalOpen])

    const closeAnalyzeEmotionPeriodModal = useCallback(() => {
        setIsEmotionPeriodModalOpen(false)
    }, [setIsEmotionPeriodModalOpen])


    return (
        <>
            {
                !isOpen && (
                    <Box sx={{
                        position: 'fixed',
                        right: '10px',
                        top: '10px',
                    }}>
                        <AiEmotionAnalyzerButton onClick={() => setIsOpen(true)}/>
                    </Box>
                )
            }
            {
                <Drawer
                    sx={{
                        display: 'flex',
                        width: '400px',
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: '400px',
                        },
                    }}
                    variant="temporary"
                    anchor="right"
                    open={isOpen}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            padding: '20px',
                        }}
                    >
                        <IconButton
                            sx={{
                                width: '40px',
                                height: '40px'
                            }}
                            onClick={() => setIsOpen(false)}>
                            <ChevronRightIcon/>
                        </IconButton>
                        <Typography variant="subtitle1" component="div">
                            AI Emotion analyzer
                        </Typography>
                    </Stack>
                    <EmotionPeriodPickerModal
                        isOpen={isEmotionPeriodModalOpen}
                        onCloseHandler={closeAnalyzeEmotionPeriodModal}
                    />
                    <Divider/>
                    {
                        emotionAnalyzeResult === null
                            ? (
                                <Stack
                                    direction={'column'}
                                >
                                    <EmotionAnalyzerItem
                                        name="Analyze current emotion"
                                        description="Analyze one selected emotion."
                                        onClick={analyzeCurrentEmotion}
                                        isLoading={isLoading['EMOTION_ANALYZE']}
                                        disabled={activeEmotionId === null}
                                        disabledInfo={'You must open existing emotion to execute it.'}
                                        icon={
                                            <PiMaskHappy size={'30px'}/>
                                        }
                                    />
                                    <EmotionAnalyzerItem
                                        name="Analyze current emotions set"
                                        description="Analyze the list of emotions from selected set."
                                        onClick={analyzeCurrentEmotionSet}
                                        isLoading={isLoading['EMOTION_SET_ANALYZE']}
                                        disabled={activeEmotionSetId === null}
                                        disabledInfo={'You must open emotions set to execute it.'}
                                        icon={
                                            <FaTheaterMasks size={'30px'}/>
                                        }
                                    />
                                    <Divider/>
                                    <EmotionAnalyzerItem
                                        isLoading={isLoading['EMOTION_PERIOD_ANALYZE']}
                                        name="Analyze emotion for period"
                                        onClick={openAnalyzeEmotionPeriodModal}
                                        icon={
                                            <BsCalendar2Month size={'30px'}/>
                                        }
                                    />
                                    <Divider/>
                                </Stack>
                            )
                            : (
                                <EmotionAnalyzeResultCard
                                    emotionAnalyzeResult={emotionAnalyzeResult}
                                />
                            )
                    }
                </Drawer>
            }
        </>
    );
}