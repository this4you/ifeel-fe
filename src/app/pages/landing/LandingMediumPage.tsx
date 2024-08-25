import { PageContainer } from '@commons/containers/PageContainer.tsx';
import { LeftSidebar, MainContent } from '@commons/containers';
import { LogoLight } from '@commons/components';
import { GoogleLogin } from '@auth/components';
import { Box, Typography, useTheme } from '@mui/material';

export const LandingMediumPage = () => {
    const theme = useTheme();
    return (
        <PageContainer>
            <LeftSidebar>
                <LogoLight width={100} height={40} style={{ marginTop: '50px' }}/>
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <GoogleLogin/>
                </Box>
            </LeftSidebar>
            <MainContent>
                <Box sx={{
                    width: '450px',
                    minHeight: '450px',
                    maxHeight: '450px',
                    backgroundColor: 'white',
                    padding: '45px',
                    borderRadius: theme.shape.borderRadius,
                }}>
                    <Typography variant='h5'>
                        What do you feel?
                    </Typography>
                    <Typography variant='subtitle1' sx={{
                        marginTop:'40px'
                    }}>
                        Try to describe your emotions at the moment.
                    </Typography>
                    <Typography variant='subtitle1' sx={{
                        marginTop:'25px'
                    }}>
                        Listen to your inner child.
                    </Typography>
                    <Typography variant='subtitle1' sx={{
                        marginTop:'25px'
                    }}>
                        Do it regularly.
                    </Typography>
                    <Typography variant='h5' sx={{
                        marginTop:'40px'
                    }}>
                        Start to understand yourself!
                    </Typography>
                </Box>
            </MainContent>
        </PageContainer>
    );
}