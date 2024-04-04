import { axios } from '@/lib/axios';

export type LoginDTO = {
    email: string;
    password: string;
};

// ログイン処理
export const login = async (data: LoginDTO): Promise<{ token: string }> => {
    return await axios.post('/signin', data);
};
