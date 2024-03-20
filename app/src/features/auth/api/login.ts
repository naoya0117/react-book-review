import { axios } from '@/lib/axios';

type LoginDTO = {
    email: string;
    password: string;
};

// ログイン処理
export const login = async (data: LoginDTO) => {
    const response = await axios.post('/signin', data);
    return response.data;
};
