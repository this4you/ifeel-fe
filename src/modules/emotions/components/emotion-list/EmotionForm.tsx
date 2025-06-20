import { Box, Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LogoDark } from '@commons/components';
import React, { useCallback } from 'react';
import { FormWrapper } from '@commons/form/FormWrapper.tsx';
import { Emotion } from '../../models/Emotion.ts';
import { FormTextField } from '@commons/form/FormTextField.tsx';
import { useFormContext } from 'react-hook-form';
import { useSaveEmotion } from '../../use-cases/useSaveEmotion.ts';
import { useGetEmotionFormDefaultValue } from '../../use-cases/useGetEmotionFormDefaultValue.ts';

export const EmotionForm: React.FC = () => {
    const getEmotionsFormDefaultValue = useGetEmotionFormDefaultValue();

    const saveEmotion = useSaveEmotion();
    const { t } = useTranslation();

    return (
        <FormWrapper formName={'emotion-form'} defaultValues={getEmotionsFormDefaultValue()} submit={(data: Emotion) => {
            saveEmotion(data);
        }}>
            <EmotionFormContent/>
        </FormWrapper>
    );
}


const EmotionFormContent: React.FC = () => {
    const { reset, formState: { isDirty } } = useFormContext();

    const onCancelClick = useCallback(() => {
        reset();
    }, [reset]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '70px'
            }}>
                <Box/>
                <LogoDark width={'100px'}/>
                <Box/>
                {/*<AiEmotionAnalyzerButton/>*/}
            </Box>
            <Stack
                display={'flex'}
                spacing={2}
                marginInline={2}
                marginTop={1}
                overflow={'hidden'}
                paddingTop={'6px'}
                sx={{
                    overflow: 'auto'
                }}
            >
                <FormTextField
                    required
                    fullWidth
                    variant={'outlined'}
                    id="name"
                    name="name"
                    label={t('emotionForm.emotionLabel')}
                />
                <FormTextField
                    required
                    fullWidth
                    variant={'outlined'}
                    id="description"
                    name="description"
                    label={t('emotionForm.descriptionLabel')}
                    multiline
                    rows="4"
                />
                <FormTextField
                    fullWidth
                    variant={'outlined'}
                    id="childNeed"
                    name="childNeed"
                    label={t('emotionForm.needLabel')}
                />
                <FormTextField
                    fullWidth
                    variant={'outlined'}
                    id="schema"
                    name="schema"
                    label={t('emotionForm.schemaLabel')}
                />
                <FormTextField
                    fullWidth
                    variant={'outlined'}
                    id="usefulConversation"
                    name="usefulConversation"
                    label={t('emotionForm.conversationLabel')}
                    multiline
                    rows="4"
                />
                <FormTextField
                    fullWidth
                    variant={'outlined'}
                    id="futureActions"
                    name="futureActions"
                    label={t('emotionForm.futureActionsLabel')}
                    multiline
                    rows="4"
                />
            </Stack>
            <Box sx={{
                marginTop: 2,
                display: 'flex',
                justifyContent: 'center',
                width: '95%'
            }}>
                <Stack direction="row" spacing={1} width={'100%'} justifyContent={'end'}>
                    <Button
                        sx={{ width: '90px' }}
                        variant={'contained'}
                        color={'inherit'}
                        onClick={onCancelClick}
                        disabled={!isDirty}
                    >
                        {t('emotionForm.cancel')}
                    </Button>
                    <Button
                        type={'submit'}
                        variant={'contained'}
                        disabled={!isDirty}
                    >
                        {t('emotionForm.save')}
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}