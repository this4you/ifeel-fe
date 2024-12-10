import { FaLightbulb } from 'react-icons/fa';
import { Box, Tooltip, useTheme } from '@mui/material';
import React from 'react';
import { AlertDialog } from '@commons/components/AlertDialog.tsx';

type Props = {
    onClick?: Function
}

export const AiEmotionAnalyzerButton: React.FC<Props> = ({
    onClick
}) => {
    const { palette, spacing } = useTheme();

    return (
            <Box
                onClick={() => onClick && onClick()}
                sx={[
                {
                    width: '30px',
                    heigth: '30px',
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
                    <Box>
                        <FaLightbulb
                            size={'30px'}
                        />
                    </Box>
                </Tooltip>
            </Box>
    );
}