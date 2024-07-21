import { baseAxios } from '../../../commons/api/baseAxios.ts';
import { UserInfo } from '../models/UserInfo.ts';

export const getUserInfoRest = async (): Promise<UserInfo> => {
    const userInfoResponse = await baseAxios.get<UserInfo>('/user-info');

    return userInfoResponse.data;
}
