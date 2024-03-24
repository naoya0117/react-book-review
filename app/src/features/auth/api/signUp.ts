import { axios } from '@/lib/axios';

export type SignUpDTO = {
    name: string;
    email: string;
    password: string;
};

export const signUp = async (data: SignUpDTO) => {
    return await axios.post('/users', data);
};
