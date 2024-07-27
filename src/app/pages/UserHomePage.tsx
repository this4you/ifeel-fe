import { PageContainer } from '../../commons/containers/PageContainer.tsx';
import { LeftSidebar, MainContent } from '../../commons/containers';
import { LogoLight } from '../../commons/components';
import { UserAvatar, UserLogOut } from '../../modules/auth/components';

export const UserHomePage = () => (
    <PageContainer>
        <LeftSidebar>
            <LogoLight
                width={100}
                height={40}
                style={{ marginTop: '50px', marginBottom: '50px' }}
            />
            <UserAvatar/>
            <UserLogOut/>
        </LeftSidebar>
        <MainContent/>
    </PageContainer>
);