import React from "react";
import { alpha, Box, CircularProgress, Fade, Stack, useTheme } from "@mui/material";
import { EmotionCategory } from "@emotions/components/emotions-adviser-modal/emotion-adviser-list/EmotionCategory.tsx";
import { useEmotionAdvisorStore } from "@emotions/state/useEmotionAdvisorStore.ts";

const colors = [
    "#9fffc4", "#9fffe5", "#9ffffc", "#9fccff", "#9facff",
    "#fc9fff", "#ff9fc1", "#ff9f9f", "#ff5c5c", "#e31e1e"
];

export const EmotionAdviserList: React.FC = () => {
    const { emotionsCategories, isLoading } = useEmotionAdvisorStore();
    const { palette } = useTheme();

    if (isLoading) {
        return (
            <Fade in={isLoading}>
                <Box sx={{
                    zIndex: '1000',
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <CircularProgress size={60} sx={{ color: palette.primary.main }}/>
                </Box>
            </Fade>
        );
    }

    return (
        <Stack direction='row' gap={2} flexWrap={'wrap'} justifyContent={'center'}>
            {emotionsCategories.map((it, index) => (
                <EmotionCategory key={it.name} category={it} color={colors[index]}/>
            ))}
        </Stack>
    )
}
