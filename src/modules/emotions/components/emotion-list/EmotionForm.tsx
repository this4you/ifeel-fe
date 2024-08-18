import { Box, Button, Stack, TextField } from '@mui/material';
import { LogoDark } from '@commons/components';
import React from 'react';
import { FormWrapper } from '@commons/components/form/FormWrapper.tsx';
import { Emotion } from '../../models/Emotion.ts';
import { FormTextField } from '@commons/components/form/FormTextField.tsx';

export const EmotionForm: React.FC = () => {
    return (
        <FormWrapper submit={(data: Emotion) => {
            console.log('FORM DATA', data);
        }}>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
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
            <Stack
                display={'flex'}
                spacing={2}
                marginInline={2}
                marginTop={1}
                overflow={'scroll'}
            >
                <FormTextField
                    required
                    fullWidth
                    variant={'outlined'}
                    id="name"
                    name="name"
                    label="What is your emotion?"
                />
                <FormTextField
                    required
                    fullWidth
                    variant={'outlined'}
                    id="description"
                    name="description"
                    label="Description"
                    multiline
                    rows='4'
                />
                <FormTextField
                    fullWidth
                    variant={'outlined'}
                    id="childNeed"
                    name="childNeed"
                    label="Need"
                />
                <FormTextField
                    fullWidth
                    variant={'outlined'}
                    id="schema"
                    name="schema"
                    label="Schema"
                />
                <FormTextField
                    fullWidth
                    variant={'outlined'}
                    id="usefulConversation"
                    name="usefulConversation"
                    label="Conversation with child"
                    multiline
                    rows='4'
                />
                <FormTextField
                    fullWidth
                    variant={'outlined'}
                    id="futureActions"
                    name="futureActions"
                    label="Future actions"
                    multiline
                    rows='4'
                />
            </Stack>
            <Box sx={{
                marginTop: 2,
                display: 'flex',
                justifyContent: 'center',
                width: '95%'
            }}>
                <Stack direction='row' spacing={1} width={'100%'} justifyContent={'end'}>
                    <Button sx={{width: '90px'}} variant={'contained'} color={'inherit'}>
                        Cancel
                    </Button>
                    <Button type={'submit'} variant={'contained'}>
                        Save
                    </Button>
                </Stack>
            </Box>
        </Box>
        </FormWrapper>
    );
}