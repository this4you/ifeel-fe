import { useEmotionAdvisorStore } from "@emotions/state/useEmotionAdvisorStore.ts";

export const useShowEmotionAdviser = () => {
    const { setIsEmotionAdvisorVisible } = useEmotionAdvisorStore();

    return () => {
        setIsEmotionAdvisorVisible(true);
    }
};
