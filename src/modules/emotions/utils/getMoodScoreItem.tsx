import React from 'react';

type MoodScoreItem = {
    icon: React.ReactElement;
    label: string;
}

const moodScoreItems: {
    [index: string]: MoodScoreItem;
} = {
    1: {
        icon: <span>😢</span>,
        label: '',
    },
    2: {
        icon: <span>😞</span>,
        label: '',
    },
    3: {
        icon: <span>😟</span>,
        label: '',
    },
    4: {
        icon: <span>😐</span>,
        label: '',
    },
    5: {
        icon: <span>😌</span>,
        label: '',
    },
    6: {
        icon: <span>🙂</span>,
        label: '',
    },
    7: {
        icon: <span>😃</span>,
        label: '',
    },
    8: {
        icon: <span>😊</span>,
        label: 'Neutral',
    },
    9: {
        icon: <span>😍</span>,
        label: 'Satisfied',
    },
    10: {
        icon: <span>😎</span>,
        label: 'Very Satisfied',
    },
};

export const getMoodScoreItem = (moodScore: number): MoodScoreItem => {
    return moodScoreItems[moodScore];
}