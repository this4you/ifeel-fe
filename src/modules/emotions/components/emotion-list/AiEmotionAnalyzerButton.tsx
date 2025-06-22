import { Box, Tooltip, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { CgMenuGridO as Icon } from "react-icons/cg";

type Props = {
    onClick?: Function
}

export const AiEmotionAnalyzerButton: React.FC<Props> = ({
    onClick
}) => {
    const { palette, spacing } = useTheme();
    const { t } = useTranslation();

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
                <Tooltip title={t('ai.tooltip')} placement={'left'}>
                    <Box>
                        <Icon
                            size={'35px'}
                        />
                    </Box>
                </Tooltip>
            </Box>
    );
}