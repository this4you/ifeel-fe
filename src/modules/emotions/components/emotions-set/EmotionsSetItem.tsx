import { Box, Typography } from '@mui/material';
import { EmotionSet } from '../../models/EmotionSet.ts';
import moment from 'moment';
import { getMoodScoreItem } from '../../utils/getMoodScoreItem.tsx';
import { useSetActiveEmotionSet } from '../../use-cases/useSetActiveEmotionSet.ts';
import { useEmotionSetsStore } from '../../state/useEmotionSetsStore.ts';

type Props = { emotionSet: EmotionSet }

export const EmotionsSetItem: React.FC<Props> = ({
                                                     emotionSet: { id, date, moodScore }
                                                 }) => {
    const { activeEmotionSetId } = useEmotionSetsStore();
    const setActiveEmotionSet = useSetActiveEmotionSet();

    const isActiveEmotionSet = activeEmotionSetId === id;

    return (
        <Box
            key={id}
            sx={{
                width: '100%',
                minHeight: '70px',
                height: '70px',
                display: 'grid',
                gridTemplateColumns: '80% 1fr',
                gridTemplateRows: '1fr',
                gridColumnGap: '0px',
                gridRowGap: '0px',
                alignItems: 'center',
                padding: '15px',
                cursor: 'pointer',
                borderBottom: '1px solid',
                borderBottomColor: 'divider',
                backgroundColor: isActiveEmotionSet ? 'white' : 'inherit',
            }}
            onClick={() => setActiveEmotionSet(id)}
        >
            <Typography variant={'subtitle2'}>
                {moment(date).format('dddd DD/MM/YY')}
            </Typography>
            <Typography variant={'subtitle2'}>
                {getMoodScoreItem(moodScore).icon} ({moodScore})
            </Typography>
        </Box>
    );
}