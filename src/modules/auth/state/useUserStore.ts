import { create } from 'zustand';
import { UserInfo } from '../models/UserInfo.ts';

type UserStore = {
    user: UserInfo | null;
    isLoading: boolean;
    setUser: (user: UserInfo | null) => void;
    setLoading: (isLoading: boolean) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    isLoading: true,
    setUser: user => set(() => ({ user: user })),
    setLoading: isLoading => set(() => ({ isLoading })),
}));