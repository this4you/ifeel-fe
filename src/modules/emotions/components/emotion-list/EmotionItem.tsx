import React from 'react';
import { Emotion } from '../../models/Emotion.ts';
import { alpha, Box, Typography, useTheme } from '@mui/material';

export const EmotionItem: React.FC<{ emotion: Partial<Emotion> }> = ({ emotion }) => {
    const { palette } = useTheme();

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            width: '90%',
            height: '70px',
            padding: 2,
            backgroundColor: alpha(palette.primary.main, 0.3),
            borderRadius: '10px'
        }}>
            <Typography variant={'subtitle2'}>
                {emotion.name}
            </Typography>
        </Box>
    );
}