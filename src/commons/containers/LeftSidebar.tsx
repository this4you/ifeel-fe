import { FC, PropsWithChildren } from 'react';
import { Box, useTheme } from '@mui/material';

export const LeftSidebar: FC<PropsWithChildren> = ({ children }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: theme.palette.primary.main,
                width: '350px'
            }}
        >
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '300px'
                }}
            >
                {children}
            </Box>
            <Box
                sx={{
                    backgroundColor: '#F5F5F5',
                    height: '100%',
                    width: '40px',
                    borderRadius: '50px 0 0 50px'
                }}
            />
        </Box>
    )
};