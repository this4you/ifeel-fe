import { Avatar, Typography } from '@mui/material';
import { useUserStore } from '../state/useUserStore.ts';
import defaultAvatar from '../../../commons/img/default-avatar.svg';

export const UserAvatar: React.FC = () => {
    const { user } = useUserStore();

    if (!user) {
        return null;
    }

    return (
        <>
            <Avatar
                src={defaultAvatar}
                sx={{
                    width: '70px',
                    height: '70px',
                }}/>
            <Typography
                variant="subtitle1"
                sx={{
                    marginTop: '20px',
                    color: 'common.white',
                }}
            >
                {user.userName}
            </Typography>
        </>
    );
}