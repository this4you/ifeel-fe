import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { EmotionSetAnalyzeResult } from '../../models/EmotionSetAnalyzeResult.ts';
import { EmotionAnalyzeResultCardFooter } from './EmotionAnalyzeResultCardFooter.tsx';

type Props = {
    result: EmotionSetAnalyzeResult
}

export const CurrentEmotionSetAnalyzeResultCard: React.FC<Props> = ({
    result: {
        recommendation
    }
}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '20px',
        }}>
            <Typography variant="h6" marginTop={'10px'} marginBottom={'10px'} fontWeight={'bold'}>
                Analyze emotion set result
            </Typography>
            <Typography variant="subtitle1" fontWeight={'bold'}>
                Recommendation
            </Typography>

            <Typography variant="body2" textAlign={'left'} marginTop={'10px'}>
                {recommendation}
            </Typography>

            <Divider sx={{ marginTop: '20px', marginBottom: '20px' }}/>

            <EmotionAnalyzeResultCardFooter/>
        </Box>
    );
};