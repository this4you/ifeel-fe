import { PageContainer } from '../../commons/containers/PageContainer.tsx';
import { LeftSidebar, MainContent } from '../../commons/containers';
import { LogoDark, LogoLight } from '../../commons/components';
import { GoogleLogin } from '../../modules/auth';
import { Box, Typography } from '@mui/material';

export const LandingPage = () => (
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
            <LogoDark
                width={400}
                height={400}
                style={{
                    filter: 'invert(36%) sepia(87%) saturate(446%) hue-rotate(174deg) brightness(93%) contrast(99%)'
                    // filter: 'invert(53%) sepia(23%) saturate(379%) hue-rotate(112deg) brightness(89%) contrast(92%)'
                }}
            />
            <Box sx={{
                width: '450px',
                minHeight: '450px',
                maxHeight: '450px',
                backgroundColor: 'white',
                padding: '45px',
                borderRadius: '40px'
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