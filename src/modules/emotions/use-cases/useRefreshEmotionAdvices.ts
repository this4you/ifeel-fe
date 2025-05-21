import { useLogger } from '@commons/use-cases/useLogger.ts';
import { useEmotionAdvisorStore } from "@emotions/state/useEmotionAdvisorStore.ts";
import { getEmotionAdvicesRest } from "@emotions/api/getEmotionAdvicesRest.ts";
import { refreshEmotionAdvicesRest } from "@emotions/api/refreshEmotionAdvicesRest.ts";

export const useLoadEmotionAdvices = () => {
    const { setEmotionsCategories, setIsCategoryLoading, emotionsCategories } = useEmotionAdvisorStore();
    const log = useLogger();

    return async (category: string, oldEmotions: string[]) => {
        try {
            setIsCategoryLoading(category, true);

            const emotionAdvices = await refreshEmotionAdvicesRest(category, oldEmotions);

            const updatedCategories = emotionsCategories.map((item) =>
                item.name === category ? { ...item, emotions: emotionAdvices } : item
            );

            setEmotionsCategories(updatedCategories);

        } catch (e) {
            log(e as Error, 'Error happens during refresh emotion advices');
        } finally {
            setIsCategoryLoading(category, false);
        }
    }
};
