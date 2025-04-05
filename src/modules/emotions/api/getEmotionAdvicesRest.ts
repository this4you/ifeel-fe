import { baseAxios } from '@commons/api/baseAxios.ts';
import { EmotionAdvisorCategory } from "@emotions/models/EmotionAdvisorCategory.ts";

export const getEmotionAdvicesRest = async (): Promise<EmotionAdvisorCategory[]> => {
    const emotions = await baseAxios.get<EmotionAdvisorCategory[]>(
        `emotion-advices`
    );

    return emotions.data;
}
