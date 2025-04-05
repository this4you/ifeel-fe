import React from "react";
import { EmotionAdvisorCategory } from "@emotions/models/EmotionAdvisorCategory.ts";
import { alpha, Box, Chip, Paper, Typography } from "@mui/material";
import { RxUpdate } from "react-icons/rx";
import { useSelectEmotionAdvice } from "@emotions/use-cases/useSelectEmotionAdvice.ts";

type Props = {
    category: EmotionAdvisorCategory,
    color: string
};

export const EmotionCategory: React.FC<Props> = ({ category, color }) => {
    const selectEmotionAdvice = useSelectEmotionAdvice();

    return (
        <Paper variant={'outlined'} sx={{
            position: 'relative',
            overflow: 'scroll',
            padding: 2,
            width: '200px',
            height: '250px',
            backgroundColor: alpha(color, 0.15),
        }}>
            <Typography variant="subtitle2" gutterBottom>
                {category.name}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {category.emotions.map((emotion) => (
                    <Chip
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
                cursor: 'pointer'
            }}>
                <RxUpdate/>
            </Box>
        </Paper>
    );
}