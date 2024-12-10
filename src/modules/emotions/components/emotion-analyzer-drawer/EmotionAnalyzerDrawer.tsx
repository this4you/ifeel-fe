import React, { useState } from 'react';
import { Box, Divider, Drawer, IconButton } from '@mui/material';
import { AiEmotionAnalyzerButton } from '@emotions/components/emotion-list/AiEmotionAnalyzerButton.tsx';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const EmotionAnalyzerDrawer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {
                !isOpen && (
                    <Box sx={{
                        position: 'fixed',
                        right: '10px',
                        top: '10px',
                    }}>
                        <AiEmotionAnalyzerButton onClick={() => setIsOpen(true)}/>
                    </Box>
                )
            }
            {
                <Drawer
                    sx={{
                        width: '400px',
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: '400px',
                        },
                    }}
                    variant="temporary"
                    anchor="right"
                    open={isOpen}
                >
                    <IconButton
                        sx={{
                            marginTop: '10px',
                            marginBottom: '10px',
                            width: '50px'
                        }}
                        onClick={() => setIsOpen(false)}>
                        <ChevronRightIcon/>
                    </IconButton>
                    <Divider/>
                </Drawer>
            }
        </>
    );
}