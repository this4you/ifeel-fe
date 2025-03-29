import React from "react";
import Dialog from "@mui/material/Dialog";
import { Box, Chip, DialogContentText, Grid, Paper, Stack, Typography } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
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
            // fullWidth
            open={isOpen}
            maxWidth={'lg'}

        >
            <Box sx={{ padding: '10px' }}>
                <DialogTitle>Emotion adviser</DialogTitle>
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
                <DialogActions>
                    <Button onClick={onCloseHandler} variant={'contained'} color={'inherit'}>Close</Button>
                </DialogActions>
            </Box>
        </Dialog>);
}
