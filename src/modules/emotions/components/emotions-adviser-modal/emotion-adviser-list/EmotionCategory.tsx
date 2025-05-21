import React, { useCallback, useMemo } from "react";
import { EmotionAdvisorCategory } from "@emotions/models/EmotionAdvisorCategory.ts";
import { alpha, Box, Chip, Paper, Typography } from "@mui/material";
import { RxUpdate } from "react-icons/rx";
import { useSelectEmotionAdvice } from "@emotions/use-cases/useSelectEmotionAdvice.ts";
import { useLoadEmotionAdvices } from "@emotions/use-cases/useRefreshEmotionAdvices.ts";
import { useEmotionAdvisorStore } from "@emotions/state/useEmotionAdvisorStore.ts";

type Props = {
    category: EmotionAdvisorCategory,
    color: string
};

export const EmotionCategory: React.FC<Props> = ({ category, color }) => {
    const selectEmotionAdvice = useSelectEmotionAdvice();
    const loadEmotionAdvices = useLoadEmotionAdvices();
    const { categoryLoading } = useEmotionAdvisorStore();
    const isLoading = useMemo(() => {
        return categoryLoading[category.name];
    }, [category, categoryLoading])
    const onUpdateEmotions = useCallback(() => {
        if (!isLoading) {
            loadEmotionAdvices(category.name, category.emotions)
        }
    }, [loadEmotionAdvices, isLoading, category]);


    return (
        <Paper variant={'outlined'} sx={{
            position: 'relative',
            overflow: 'scroll',
            padding: 2,
            width: '200px',
            height: '250px',
            backgroundColor: alpha(color, 0.15),
        }}>
            <Typography variant="subtitle2" gutterBottom sx={{ marginBottom: '10px' }}>
                {category.name}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {category.emotions.map((emotion) => (
                    <Chip
                        sx={{ textTransform: 'capitalize' }}
                        key={emotion}
                        label={emotion}
                        onClick={() => selectEmotionAdvice(emotion)}
                        clickable
                        color="default"
                        variant="outlined"
                    />
                ))}
            </Box>
            <Box sx={{
                top: '10px',
                right: '10px',
                position: 'absolute',
                cursor: 'pointer',
                color: isLoading ? 'grey' : 'inherit'
            }}>
                <RxUpdate onClick={onUpdateEmotions}/>
            </Box>
        </Paper>
    );
}