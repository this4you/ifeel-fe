import React from "react";
import { EmotionAdvisorCategory } from "@emotions/models/EmotionAdvisorCategory.ts";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { RxUpdate } from "react-icons/rx";
import { alpha } from "@mui/material";

const categories: EmotionAdvisorCategory[] = [
    {
        name: "Спокій",
        emotions: ["гармонія", "розслабленість", "задоволення", "умиротворення"],
        color: "#9fffc4"
    },
    {
        name: "Надія",
        emotions: ["оптимізм", "натхнення", "мотивація", "віра"],
        color: "#9fffe5"
    },
    {
        name: "Любов",
        emotions: ["ніжність", "прив’язаність", "турбота", "приязнь"],
        color: "#9ffffc"
    },
    {
        name: "Радість",
        emotions: ["щастя", "вдячність", "захоплення", "впевненість", "натхнення"],
        color: "#9fccff"
    },
    {
        name: "Подив",
        emotions: ["шок", "здивування", "зацікавлення", "розгубленість"],
        color: "#9facff"
    },
    {
        name: "Сум",
        emotions: ["туга", "втрата", "смуток", "розчарування", "самотність"],
        color: "#fc9fff"
    },
    {
        name: "Провина",
        emotions: ["каяття", "відповідальність", "самозвинувачення"],
        color: "#ff9fc1"
    },
    {
        name: "Страх",
        emotions: ["тривога", "невпевненість", "паніка", "сором", "обережність"],
        color: "#ff9f9f"
    },
    {
        name: "Огида",
        emotions: ["відраза", "осуд", "неприйняття", "гидливість", "сором"],
        color: "#ff5c5c"
    },
    {
        name: "Злість",
        emotions: ["роздратування", "гнів", "лють", "фрустрація", "образа"],
        color: "#e31e1e"
    }
];

const EmotionCategory: React.FC<{category: EmotionAdvisorCategory}> = ({ category }) => (
    <Paper variant={'outlined'} sx={{
        position: 'relative',
        padding: 2,
        width: '200px',
        height: '250px',
        backgroundColor: alpha(category.color, 0.15),
    }}>
        <Typography variant="subtitle2" gutterBottom>
            {category.name}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {category.emotions.map((emotion) => (
                <Chip
                    key={emotion}
                    label={emotion}
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

export const EmotionAdviserList: React.FC = () => {
    return (
        <Stack direction='row' gap={2} flexWrap={'wrap'} justifyContent={'center'}>
            {categories.map(it => (
                <EmotionCategory key={it.name} category={it}/>
            ))}
        </Stack>
    )
}
