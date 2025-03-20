import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { DateRangePicker } from 'react-date-range';
import { Box } from "@mui/material";

type Props = {
    isOpen: boolean;
    onCloseHandler: () => void
}

export const EmotionPeriodPickerModal: React.FC<Props> = ({ isOpen, onCloseHandler }) => {
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const handleSelect = (ranges: any) => {
        setDateRange(ranges.selection);
    };

    return (
        <Dialog
            fullWidth
            open={isOpen}
        >
            <Box sx={{padding: '10px'}}>
                <DialogTitle>Select period for analise</DialogTitle>
                <DialogContent sx={{overflow: 'hidden'}}>
                    <DateRangePicker
                        maxDate={new Date()}
                        ranges={[dateRange]}
                        onChange={handleSelect}
                        weekStartsOn={1}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseHandler} variant={'contained'} color={'inherit'}>Cancel</Button>
                    <Button variant={'contained'}>Analise</Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}
