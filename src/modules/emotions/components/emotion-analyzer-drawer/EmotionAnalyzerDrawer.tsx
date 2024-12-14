import React, { useState } from 'react';
import { Box, Divider, Drawer, IconButton, Stack, Typography } from '@mui/material';
import { AiEmotionAnalyzerButton } from '@emotions/components/emotion-list/AiEmotionAnalyzerButton.tsx';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { PiMaskHappy } from "react-icons/pi";
import { EmotionAnalyzerItem } from '@emotions/components/emotion-analyzer-drawer/EmotionAnalyzerItem.tsx';
import { FaTheaterMasks } from "react-icons/fa";
import { BsCalendar2Month } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";

export const EmotionAnalyzerDrawer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                    <Stack
                        direction={'column'}
                    >
                        <EmotionAnalyzerItem
                            name="Analyze current emotion"
                            description="Selected emotion will be analyzed."
                            icon={
                                <PiMaskHappy size={'30px'}/>
                            }
                        />
                        <EmotionAnalyzerItem
                            name="Analyze current emotions set"
                            description="Selected emotions set will be analyzed."
                            icon={
                                <FaTheaterMasks size={'30px'}/>
                            }
                        />
                        <Divider/>
                        <EmotionAnalyzerItem
                            name="Analyze emotion for today"
                            icon={
                                <BsCalendar2Date size={'30px'}/>
                            }
                        />
                        <EmotionAnalyzerItem
                            name="Analyze emotion for month"
                            icon={
                                <BsCalendar2Month size={'30px'}/>
                            }
                        />
                        <Divider/>
                    </Stack>
                </Drawer>
            }
        </>
    );
}