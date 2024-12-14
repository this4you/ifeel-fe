import React, { ReactNode } from 'react';
import { Stack, Typography, useTheme } from '@mui/material';

type Props = {
    name: string;
    icon: ReactNode;
    description?: string;
};

export const EmotionAnalyzerItem: React.FC<Props> = ({
    name,
    icon,
    description
}) => {

    return (
        <Stack direction={'row'} sx={[{
            padding: '20px',
            display:'flex',
            alignItems:'center',
            cursor: 'pointer',
        }, {
            '&:hover': {
                backgroundColor: 'background.default',
            },
        }]}>
            {icon}
            <Stack direction={'column'}>
                <Typography variant={'subtitle2'} marginLeft={'20px'}>
                    {name}
                </Typography>
                <Typography
                    variant={'caption'}
                    marginLeft={'20px'}
                    color='text.disabled'
                >
                    {description}
                </Typography>
            </Stack>
        </Stack>
    );
};