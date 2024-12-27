import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { CurrentEmotionSetAnalyzeResult } from '@emotions/models/CurrentEmotionSetAnalyzeResult.ts';
import { EmotionAnalyzeResultCardFooter } from '@emotions/components/emotion-analyzer-drawer/EmotionAnalyzeResultCardFooter.tsx';

type Props = {
    result: CurrentEmotionSetAnalyzeResult
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
            <Typography variant="subtitle1" fontWeight={'bold'}>
                Recommendation
            </Typography>

            <Typography variant="body2" textAlign={'justify'} marginTop={'10px'}>
                {recommendation}
            </Typography>

            <Divider sx={{ marginTop: '20px', marginBottom: '20px' }}/>

            <EmotionAnalyzeResultCardFooter/>
        </Box>
    );
};