import { axios } from '@/lib/axios';

export type SignUpDTO = {
    name: string;
    email: string;
    password: string;
};

export const signUp = async (data: SignUpDTO) => {
    return axios.post('/users', data);
};
