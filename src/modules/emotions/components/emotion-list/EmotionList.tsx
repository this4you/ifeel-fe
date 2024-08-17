import { Box, Stack, Typography, useTheme } from '@mui/material';
import { MdDeleteOutline, MdOutlineCreate } from 'react-icons/md';

export const EmotionsList: React.FC = () => {
    const { palette } = useTheme();

    return (
        <Box sx={{
            width: '180px',
            height: '100%',
            borderRight: `1px solid ${palette.divider}`
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '75px',
            }}>
                <Stack
                    direction="row"
                    justifyContent="end"
                    alignItems={'center'}
                    width={'80%'}
                >
                    <Stack direction={'row'} spacing="10px">
                        <MdOutlineCreate
                            size={'20px'}
                            cursor={'pointer'}
                        />
                        <MdDeleteOutline
                            size={'20px'}
                            cursor={'pointer'}
                        />
                    </Stack>
                </Stack>
            </Box>
            <Stack direction={'column'} alignItems={'center'}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '90%',
                    height: '70px',
                    // borderBottom: '1px solid',
                    // borderBottomColor: 'divider',
                    padding: 2,
                    backgroundColor: 'divider',
                    borderRadius: '10px'
                }}>
                    <Typography variant={'subtitle2'}>
                        New emotion
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
}