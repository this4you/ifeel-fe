import { useFormContextByName } from "@commons/form/useFormContextByName.ts";
import { Emotion } from "@emotions/models/Emotion.ts";
import { useEmotionAdvisorStore } from "@emotions/state/useEmotionAdvisorStore.ts";

export const useSelectEmotionAdvice = () => {
    const emotionForm = useFormContextByName<Emotion>('emotion-form');
    const { setIsEmotionAdvisorVisible } = useEmotionAdvisorStore();

    return async (emotion: string) => {
        emotionForm.setValue('name', emotion);
        setIsEmotionAdvisorVisible(false);
    }
};
