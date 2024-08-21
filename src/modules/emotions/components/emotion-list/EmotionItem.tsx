import React, { useCallback } from 'react';
import { Emotion } from '../../models/Emotion.ts';
import { alpha, Box, Typography, useTheme } from '@mui/material';
import { useSetActiveEmotion } from '../../use-cases/useSetActiveEmotion.ts';

export const EmotionItem: React.FC<{ emotion: Partial<Emotion>, isActive: boolean }> = ({
    emotion,
    isActive
}) => {
    const { palette } = useTheme();
    const setActiveEmotion = useSetActiveEmotion();

    const onClickHandler = useCallback(() => {
        if (emotion.id) {
            setActiveEmotion(emotion.id);
        }
    }, [setActiveEmotion, emotion.id])

    return (
        <Box
            onClick={onClickHandler}
            key={emotion?.id}
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '90%',
                height: '70px',
                padding: 2,
                cursor: 'pointer',
                backgroundColor: isActive ? alpha(palette.primary.main, 0.3) : 'none',
                borderRadius: '10px',
            }}>
            <Typography variant={'subtitle2'}>
                {emotion.name}
            </Typography>
        </Box>
    );
}