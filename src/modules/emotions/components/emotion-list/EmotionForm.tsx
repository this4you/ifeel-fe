import { Box, Stack, TextField } from '@mui/material';
import { LogoDark } from '@commons/components';

export const EmotionForm: React.FC = () => {
    return (
        <Box
            sx={{
                width: '100%'
            }}
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '70px'
            }}>
                <LogoDark width={'100px'}/>
            </Box>
            <Stack spacing={2} marginInline={2}>
                <TextField
                    required
                    fullWidth
                    variant={'outlined'}
                    id="name"
                    label="What is your emotion?"
                />
                <TextField
                    required
                    fullWidth
                    variant={'outlined'}
                    id="description"
                    label="Description"
                    multiline
                    rows='4'
                />
                <TextField
                    fullWidth
                    variant={'outlined'}
                    id="childNeed"
                    label="Need"
                />
                <TextField
                    fullWidth
                    variant={'outlined'}
                    id="schema"
                    label="Schema"
                />
                <TextField
                    required
                    fullWidth
                    variant={'outlined'}
                    id="usefulConversation"
                    label="Conversation with child"
                    multiline
                    rows='4'
                />
                <TextField
                    required
                    fullWidth
                    variant={'outlined'}
                    id="futureActions"
                    label="Future actions"
                    multiline
                    rows='4'
                />
            </Stack>
        </Box>
    );
}