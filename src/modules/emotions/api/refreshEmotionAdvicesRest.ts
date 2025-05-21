import { baseAxios } from '@commons/api/baseAxios.ts';
import { EmotionAdvisorCategory } from "@emotions/models/EmotionAdvisorCategory.ts";

export const refreshEmotionAdvicesRest = async (
    categoryName: string,
    oldEmotions: string[]
): Promise<string[]> => {
    const emotions = await baseAxios.post<string[]>(
        `emotion-advices/category/refresh`,
        {
            categoryName: categoryName,
            oldEmotions: oldEmotions,
        }
    );

    return emotions.data;
}
