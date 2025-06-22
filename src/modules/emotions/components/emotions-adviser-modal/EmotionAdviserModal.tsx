import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Dialog from "@mui/material/Dialog";
import { Box, DialogContentText, Typography } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { IoCloseOutline } from "react-icons/io5";
import {
    EmotionAdviserList
} from "@emotions/components/emotions-adviser-modal/emotion-adviser-list/EmotionAdviserList.tsx";
import { useLoadEmotionAdvices } from "@emotions/use-cases/useLoadEmotionAdvices.ts";

type Props = {
    isOpen: boolean;
    onCloseHandler: () => void
}

export const EmotionAdviserModal: React.FC<Props> = ({ isOpen, onCloseHandler }) => {
    const loadEmotionAdvices = useLoadEmotionAdvices();
    const { t } = useTranslation();

    useEffect(() => {
        loadEmotionAdvices();
    }, []);

    return (
        <Dialog
            open={isOpen}
            maxWidth={'lg'}
        >
            <DialogTitle
                sx={{
                    position: 'sticky',
                    top: 0,
                    backgroundColor: 'background.paper',
                    zIndex: 1,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between'
                }}
            >
                <span>{t('emotionAdviserModal.title')}</span>
                <IoCloseOutline size={'30px'} cursor={'pointer'} onClick={onCloseHandler}/>
            </DialogTitle>
            <Box sx={{ padding: '10px', position: 'relative' }}>
                <DialogContent>
                    <Typography variant="body2" component="span" display="block" gutterBottom>
                        {t('emotionAdviserModal.intro1')}
                    </Typography>
                    <Typography variant="body2" component="div" gutterBottom>
                        {t('emotionAdviserModal.intro2')}
                    </Typography>
                    <ul>
                        <li>{t('emotionAdviserModal.questions.0')}</li>
                        <li>{t('emotionAdviserModal.questions.1')}</li>
                        <li>{t('emotionAdviserModal.questions.2')}</li>
                        <li>{t('emotionAdviserModal.questions.3')}</li>
                    </ul>
                    <EmotionAdviserList/>
                </DialogContent>
            </Box>
        </Dialog>);
}
