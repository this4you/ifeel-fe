import React, { useState } from 'react';
import { Box, Divider, Drawer, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { AiEmotionAnalyzerButton } from '@emotions/components/emotion-list/AiEmotionAnalyzerButton.tsx';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { PiMaskHappy } from 'react-icons/pi';
import { EmotionAnalyzerItem } from '@emotions/components/emotion-analyzer-drawer/EmotionAnalyzerItem.tsx';
import { FaTheaterMasks } from 'react-icons/fa';
import { BsCalendar2Date, BsCalendar2Month } from 'react-icons/bs';
import { useEmotionsStore } from '@emotions/state/useEmotionsStore.ts';
import { useEmotionSetsStore } from '@emotions/state/useEmotionSetsStore.ts';
import { useAiEmotionAnalyzerStore } from '@emotions/state/useAiEmotionAnalyzerStore.ts';
import { EmotionAnalyzeResultCard } from '@emotions/components/emotion-analyzer-drawer/EmotionAnalyzeResultCard.tsx';
import { useAnalyzeCurrentEmotion } from '@emotions/use-cases/useAnalyzeCurrentEmotion.ts';
import { useAnalyzeCurrentEmotionSet } from '@emotions/use-cases/useAnalyzeCurrentEmotionSet.ts';

export const EmotionAnalyzerDrawer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { activeEmotionId } = useEmotionsStore();
    const { activeEmotionSetId } = useEmotionSetsStore();
    const { emotionAnalyzeResult, isLoading } = useAiEmotionAnalyzerStore();

    const analyzeCurrentEmotion = useAnalyzeCurrentEmotion();
    const analyzeCurrentEmotionSet = useAnalyzeCurrentEmotionSet();

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
                                        isLoading={isLoading['CURRENT_EMOTION_ANALYZE']}
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
                                        isLoading={isLoading['CURRENT_EMOTION_SET_ANALYZE']}
                                        disabled={activeEmotionSetId === null}
                                        disabledInfo={'You must open emotions set to execute it.'}
                                        icon={
                                            <FaTheaterMasks size={'30px'}/>
                                        }
                                    />
                                    <Divider/>
                                    <EmotionAnalyzerItem
                                        disabled={true}
                                        name="Analyze emotion for today"
                                        icon={
                                            <BsCalendar2Date size={'30px'}/>
                                        }
                                    />
                                    <EmotionAnalyzerItem
                                        disabled={true}
                                        name="Analyze emotion for month"
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