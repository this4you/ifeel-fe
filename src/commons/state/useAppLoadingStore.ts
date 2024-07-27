import { create } from 'zustand';

type PageLoadingState = {
    isLoading: boolean;
    setLoading: (isLoading: boolean) => void;
}

export const useAppLoadingStore = create<PageLoadingState>((set) => ({
    isLoading: true,
    setLoading: isLoading => set(() => ({ isLoading })),
}));