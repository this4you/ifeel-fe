import { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';

export const PageContainer: FC<PropsWithChildren> = ({ children }) => (
    <Box sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>
        {children}
    </Box>
);
