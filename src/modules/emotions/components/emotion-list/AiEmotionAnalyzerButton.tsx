import { FaLightbulb } from 'react-icons/fa';
import { Box, Tooltip, useTheme } from '@mui/material';
import React from 'react';
import { AlertDialog } from '@commons/components/AlertDialog.tsx';

export const AiEmotionAnalyzerButton = () => {
    const { palette, spacing } = useTheme();

    return (
        <AlertDialog
            title={'Warning'}
            description={'Using artificial intelligence to recognize emotions can be misleading. We recommend trying to analyze your own feelings before turning to the system.'}
        >
            <Box sx={[
                {
                    marginRight: spacing(2),
                    color: palette.primary.light,
                    cursor: 'pointer'
                },
                {
                    '&:hover': {
                        color: palette.primary.dark,
                    },
                },
            ]}>
                <Tooltip title="Analyze emotion by AI" placement={'left'}>
                    <div>
                        <FaLightbulb
                            size={'30px'}
                        />
                    </div>
                </Tooltip>
            </Box>
        </AlertDialog>
    );
}