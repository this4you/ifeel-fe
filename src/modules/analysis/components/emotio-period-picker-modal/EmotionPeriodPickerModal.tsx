import React, { useCallback, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { DateRangePicker, Range, RangeKeyDict } from 'react-date-range';
import { Box } from "@mui/material";
import { useAnalyzeEmotionPeriod } from "@analysis/use-cases/useAnalyzeEmotionPeriod.ts";

const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

type Props = {
    isOpen: boolean;
    onCloseHandler: () => void
}

export const EmotionPeriodPickerModal: React.FC<Props> = ({ isOpen, onCloseHandler }) => {
    const analyzeEmotionPeriod = useAnalyzeEmotionPeriod();

    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    } as Range);

    const handleSelect = (ranges: RangeKeyDict) => {
        setDateRange(ranges["selection"]);
    };

    const onAnaliseClick = useCallback(() => {
        if (dateRange.startDate && dateRange.endDate) {
            onCloseHandler();

            analyzeEmotionPeriod({
                from: formatDate(dateRange.startDate),
                to: formatDate(dateRange.endDate)
            });
        }
    }, [analyzeEmotionPeriod, dateRange])

    return (
        <Dialog
            fullWidth
            open={isOpen}
        >
            <Box sx={{ padding: '10px' }}>
                <DialogTitle>Select period for analise</DialogTitle>
                <DialogContent sx={{ overflow: 'hidden' }}>
                    <DateRangePicker
                        maxDate={new Date()}
                        ranges={[dateRange]}
                        onChange={handleSelect}
                        weekStartsOn={1}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseHandler} variant={'contained'} color={'inherit'}>Cancel</Button>
                    <Button onClick={onAnaliseClick} variant={'contained'}>Analise</Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}
