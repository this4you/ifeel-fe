import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { PropsWithChildren, useCallback } from 'react';

type Props = {
    title: string;
    description: string;
    agreeCallback?: Function,
    disagreeCallback?: Function,
} & PropsWithChildren;

export const AlertDialog: React.FC<Props> = ({
    title,
    description,
    children,
    agreeCallback,
    disagreeCallback
}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = useCallback(() => {
        setOpen(true);
    }, [setOpen]);

    const handleClose = useCallback(() => {
        setOpen(false);
        disagreeCallback && disagreeCallback()
    }, [setOpen, disagreeCallback]);

    const handleConfirm = useCallback(() => {
        setOpen(false);
        agreeCallback && agreeCallback();
    }, [])

    return (
        <>
            <>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {description}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleConfirm}>Confirm</Button>
                    </DialogActions>
                </Dialog>
            </>
            <div onClick={handleClickOpen}>
                {children}
            </div>
        </>
    );
}