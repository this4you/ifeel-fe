import { useEmotionAdvisorStore } from "@emotions/state/useEmotionAdvisorStore.ts";

export const useCloseEmotionAdviser = () => {
    const { setIsEmotionAdvisorVisible } = useEmotionAdvisorStore();

    return () => {
        setIsEmotionAdvisorVisible(false);
    }
};
