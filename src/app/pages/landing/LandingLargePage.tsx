import { PageContainer } from '@commons/containers/PageContainer.tsx';
import { LeftSidebar, MainContent } from '@commons/containers';
import { LogoDark, LogoLight } from '@commons/components';
import { GoogleLogin } from '@auth/components';
import { Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const LandingLargePage = () => {
    const theme = useTheme();
    const { t } = useTranslation();
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
                <LogoDark
                    width={400}
                    height={400}
                    style={{
                        filter: 'invert(36%) sepia(87%) saturate(446%) hue-rotate(174deg) brightness(93%) contrast(99%)'
                    }}
                />
                <Box sx={{
                    width: '450px',
                    minHeight: '450px',
                    maxHeight: '450px',
                    backgroundColor: 'white',
                    padding: '45px',
                    borderRadius: theme.shape.borderRadius,
                }}>
                    <Typography variant='h5'>
                        {t('landing.whatDoYouFeel')}
                    </Typography>
                    <Typography variant='subtitle1' sx={{
                        marginTop:'40px'
                    }}>
                        {t('landing.tryDescribe')}
                    </Typography>
                    <Typography variant='subtitle1' sx={{
                        marginTop:'25px'
                    }}>
                        {t('landing.listenChild')}
                    </Typography>
                    <Typography variant='subtitle1' sx={{
                        marginTop:'25px'
                    }}>
                        {t('landing.doRegularly')}
                    </Typography>
                    <Typography variant='h5' sx={{
                        marginTop:'40px'
                    }}>
                        {t('landing.startUnderstand')}
                    </Typography>
                </Box>
            </MainContent>
        </PageContainer>
    );
}