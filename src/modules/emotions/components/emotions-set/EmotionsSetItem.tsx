import { Box, Typography } from '@mui/material';
import { EmotionSet } from '../../models/EmotionSet.ts';
import moment from 'moment';
import { getMoodScoreItem } from '../../utils/getMoodScoreItem.tsx';

type Props = { emotionSet: EmotionSet }

export const EmotionsSetItem: React.FC<Props> = ({
    emotionSet: {id, date, moodScore}
}) => {
    return (
        <Box
            key={id}
            sx={{
                width: '100%',
                height: '70px',
                display: 'grid',
                gridTemplateColumns: '80% 1fr',
                gridTemplateRows: '1fr',
                gridColumnGap: '0px',
                gridRowGap: '0px',
                alignItems: 'center',
                padding: '15px',
                marginTop: '5px',
                cursor: 'pointer',
                borderBottom: '1px solid',
                borderBottomColor: 'divider',
            }}
        >
            <Typography variant={'subtitle2'}>
                {moment(date).calendar()}
            </Typography>
            <Typography variant={'subtitle2'}>
                {getMoodScoreItem(moodScore).icon} ({moodScore})
            </Typography>
        </Box>
    );
}