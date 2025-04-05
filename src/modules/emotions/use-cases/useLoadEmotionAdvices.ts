import { useLogger } from '@commons/use-cases/useLogger.ts';
import { useEmotionAdvisorStore } from "@emotions/state/useEmotionAdvisorStore.ts";
import { getEmotionAdvicesRest } from "@emotions/api/getEmotionAdvicesRest.ts";

export const useLoadEmotionAdvices = () => {
    const { setEmotionsCategories, setIsLoading } = useEmotionAdvisorStore();
    const log = useLogger();

    return async () => {
        try {
            setIsLoading(true);

            const emotionAdvices = await getEmotionAdvicesRest();

            setEmotionsCategories(emotionAdvices)
        } catch (e) {
            log(e as Error, 'Error happens during load emotion advices');
        } finally {
            setIsLoading(false);
        }
    }
};
