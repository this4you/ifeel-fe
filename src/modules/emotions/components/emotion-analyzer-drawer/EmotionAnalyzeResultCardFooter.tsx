import { Button, IconButton, Stack } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import React from 'react';
import { useCloseEmotionResult } from '@emotions/use-cases/useCloseEmotionResult.ts';

export const EmotionAnalyzeResultCardFooter: React.FC = () => {
    const closeEmotionResult = useCloseEmotionResult();

    return (
        <Stack
            direction="row"
            justifyContent={'space-between'}
            alignItems={'center'}
            paddingBottom={'20px'}
        >
            <Stack direction="row">
                <IconButton
                    sx={{
                        width: '40px',
                        height: '40px'
                    }}
                >
                    <ThumbUpOffAltIcon/>
                </IconButton>
                <IconButton
                    sx={{
                        width: '40px',
                        height: '40px'
                    }}
                >
                    <ThumbDownOffAltIcon/>
                </IconButton>
            </Stack>
            <Button
                color={'inherit'}
                variant={'contained'}
                sx={{
                    width: '100px'
                }}
                onClick={closeEmotionResult}
            >
                Close
            </Button>
        </Stack>
    );
};