import { PageContainer } from '../../commons/containers/PageContainer.tsx';
import { LeftSidebar, MainContent } from '../../commons/containers';
import { LogoLight } from '../../commons/components';

export const LandingPage = () => (
    <PageContainer>
        <LeftSidebar>
            <LogoLight width={100} height={40} style={{marginTop: '50px'}}/>
        </LeftSidebar>
        <MainContent>
            Landing page
        </MainContent>
    </PageContainer>
);