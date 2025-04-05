import { Box, Stack, useTheme } from '@mui/material';
import { MdDeleteOutline, MdOutlineCreate, MdHelpOutline as HelpIcon } from 'react-icons/md';
import { useInitEmotions } from '../../use-cases/useInitEmotions.ts';
import { useEffect } from 'react';
import { useEmotionSetsStore } from '../../state/useEmotionSetsStore.ts';
import { useEmotionsStore } from '../../state/useEmotionsStore.ts';
import { EmotionItem } from './EmotionItem.tsx';
import { useAddNewEmotion } from '../../use-cases/useAddNewEmotion.ts';
import { useDeleteActiveEmotion } from '../../use-cases/useDeleteActiveEmotion.ts';
import { useEmotionAdvisorStore } from "@emotions/state/useEmotionAdvisorStore.ts";
import { EmotionAdviserModal } from "@emotions/components/emotions-adviser-modal/EmotionAdviserModal.tsx";
import { useShowEmotionAdviser } from "@emotions/use-cases/useShowEmotionAdviser.ts";
import { useCloseEmotionAdviser } from "@emotions/use-cases/useCloseEmotionAdviser.ts";

export const EmotionsList: React.FC = () => {
    const { palette } = useTheme();
    const { activeEmotionSetId } = useEmotionSetsStore();
    const { isEmotionAdvisorVisible } = useEmotionAdvisorStore();
    const { isNewEmotionVisible, emotions, activeEmotionId } = useEmotionsStore();

    const initEmotions = useInitEmotions();
    const addNewEmotion = useAddNewEmotion();
    const deleteActiveEmotion = useDeleteActiveEmotion();
    const showEmotionAdviser = useShowEmotionAdviser();
    const closeEmotionAdviser = useCloseEmotionAdviser();

    useEffect(() => {
        if (activeEmotionSetId) {
            initEmotions(activeEmotionSetId);
        }
    }, [activeEmotionSetId]);

    return (
        <Box sx={{
            width: '180px',
            minWidth: '180px',
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
                            onClick={addNewEmotion}
                            cursor={'pointer'}
                        />
                        <HelpIcon
                            size={'20px'}
                            color={isNewEmotionVisible ? 'initial' : palette.divider}
                            onClick={isNewEmotionVisible
                                ? showEmotionAdviser
                                : () => ''
                            }
                            cursor={'pointer'}
                        />
                        <MdDeleteOutline
                            size={'20px'}
                            onClick={deleteActiveEmotion}
                            cursor={'pointer'}
                        />
                    </Stack>
                </Stack>
            </Box>
            <Stack direction={'column'} alignItems={'center'}>
                {isNewEmotionVisible && (
                    <EmotionItem emotion={{ name: 'New emotion' }} isActive/>
                )}
                {
                    emotions.length > 0 && (
                        <>
                            {
                                emotions.map(emotion => (
                                    <EmotionItem
                                        key={emotion.id}
                                        emotion={emotion}
                                        isActive={activeEmotionId === emotion.id}
                                    />
                                ))
                            }
                        </>
                    )
                }
            </Stack>
            <EmotionAdviserModal isOpen={isEmotionAdvisorVisible} onCloseHandler={closeEmotionAdviser}/>
        </Box>
    );
}