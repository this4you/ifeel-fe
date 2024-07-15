import { PageContainer } from '../../commons/containers/PageContainer.tsx';
import { LeftSidebar, MainContent } from '../../commons/containers';
import { LogoLight } from '../../commons/components';
import { GoogleLogin } from '../../modules/auth';
import { Box } from '@mui/material';

export const LandingPage = () => (
    <PageContainer>
        <LeftSidebar>
            <LogoLight width={100} height={40} style={{marginTop: '50px'}}/>
            <Box sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center'
            }}>
            <GoogleLogin/>
            </Box>
        </LeftSidebar>
        <MainContent>
            Main content
        </MainContent>
    </PageContainer>
);