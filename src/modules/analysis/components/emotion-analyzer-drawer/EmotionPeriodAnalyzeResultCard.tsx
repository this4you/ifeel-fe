import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { EmotionAnalyzeResultCardFooter } from './EmotionAnalyzeResultCardFooter.tsx';
import { EmotionPeriodAnalyzeResult } from "@analysis/models/EmotionPeriodAnalyzeResult.ts";

type Props = {
    result: EmotionPeriodAnalyzeResult
}

export const EmotionPeriodAnalyzeResultCard: React.FC<Props> = ({
    result
}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '20px',
        }}>
            <Typography variant="h6" marginTop={'10px'} marginBottom={'10px'} fontWeight={'bold'}>
                Analyze emotions period result
            </Typography>
            <Typography variant='body1'>
                {JSON.stringify(result)}
            </Typography>

            <Divider sx={{ marginTop: '20px', marginBottom: '20px' }}/>

            <EmotionAnalyzeResultCardFooter/>
        </Box>
    );
};