import { create } from 'zustand';

type AppLoadingState = {
    isLoading: boolean;
    showLoader: () => void;
    hideLoader: () => void;
}

export const useAppLoadingStore = create<AppLoadingState>((set) => ({
    isLoading: true,
    showLoader: () => set({ isLoading: true }),
    hideLoader: () => {
        setTimeout(() => {
            set({ isLoading: false })
        }, 700);
    },
}));