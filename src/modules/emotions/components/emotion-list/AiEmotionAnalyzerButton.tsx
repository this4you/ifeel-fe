import { Box, Tooltip, useTheme } from '@mui/material';
import React from 'react';
import { CgMenuGridO as Icon } from "react-icons/cg";

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
                    width: '35px',
                    height: '35px',
                    color: palette.primary.main,
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
                        <Icon
                            size={'35px'}
                        />
                    </Box>
                </Tooltip>
            </Box>
    );
}