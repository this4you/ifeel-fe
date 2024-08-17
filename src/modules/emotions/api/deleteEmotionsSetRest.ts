import { baseAxios } from '@commons/api/baseAxios.ts';

export const deleteEmotionsSetRest = async (id: string): Promise<void> => {
    await baseAxios.delete(`/emotion-sets/${id}`);
}