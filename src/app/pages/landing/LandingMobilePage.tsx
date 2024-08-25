import { PageContainer } from '@commons/containers/PageContainer.tsx';
import { Box, Typography, useTheme } from '@mui/material';
import { LogoLight } from '@commons/components';
import { GoogleLogin } from '@auth/components';

export const LandingMobilePage = () => {
    const theme = useTheme();

    return (
        <PageContainer>
            <Box sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <LogoLight width={100} height={100}/>
                <GoogleLogin/>
            </Box>
        </PageContainer>
    );
}