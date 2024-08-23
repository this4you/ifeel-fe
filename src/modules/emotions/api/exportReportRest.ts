import { baseAxios } from '@commons/api/baseAxios.ts';

export const exportReportRest = async (): Promise<Blob> => {
    const response = await baseAxios.get<string>(
        `/emotions-report`, {
            responseType: 'blob'
        }
    );

    return new Blob([response.data]);
}
