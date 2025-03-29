import React from "react";
import Dialog from "@mui/material/Dialog";
import { Box, DialogContentText, Typography } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { IoCloseOutline } from "react-icons/io5";
import {
    EmotionAdviserList
} from "@emotions/components/emotions-adviser-modal/emotion-adviser-list/EmotionAdviserList.tsx";

type Props = {
    isOpen: boolean;
    onCloseHandler: () => void
}

export const EmotionAdviserModal: React.FC<Props> = ({ isOpen, onCloseHandler }) => {
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
                <span>Emotion adviser</span>
                <IoCloseOutline size={'30px'} cursor={'pointer'} onClick={onCloseHandler}/>
            </DialogTitle>
            <Box sx={{ padding: '10px', position: 'relative' }}>
                <DialogContent>
                    <DialogContentText>
                        <Typography variant={'body2'}>
                            <p><strong>Pause for a moment.</strong> Take a few slow breaths in and out. <br/>Feel
                                yourself — here and now.</p>
                            <p>Try to answer a few simple questions:</p>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li>What does my body feel like? Is there tension, pain, lightness?</li>
                                <li>What thoughts are spinning in my head? What am I thinking about?</li>
                                <li>What triggered this state? An event, a person, a memory?</li>
                                <li>If my emotion were a color, a sound, or a temperature — what would it be?</li>
                            </ul>
                        </Typography>
                    </DialogContentText>
                    <EmotionAdviserList/>
                </DialogContent>
            </Box>
        </Dialog>);
}
