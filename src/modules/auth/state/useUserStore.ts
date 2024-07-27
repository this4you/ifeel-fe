import { create } from 'zustand';
import { UserInfo } from '../models/UserInfo.ts';

type UserStore = {
    user: UserInfo | null;
    setUser: (user: UserInfo | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: user => set(() => ({ user: user })),
}));