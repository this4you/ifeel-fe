import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import React from 'react';
import { useCloseEmotionResult } from '@emotions/use-cases/useCloseEmotionResult.ts';
import { CurrentEmotionSetAnalyzeResult } from '@emotions/models/CurrentEmotionSetAnalyzeResult.ts';

type Props = {
    result: CurrentEmotionSetAnalyzeResult
}

export const CurrentEmotionSetAnalyzeResultCard: React.FC<Props> = ({
    result: {
        recommendation
    }
}) => {
    const closeEmotionResult = useCloseEmotionResult();

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
        </Box>
    );
};