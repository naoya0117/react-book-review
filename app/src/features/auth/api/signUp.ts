import { axios } from '@/lib/axios';

type signUpDTO = {
    name: string;
    email: string;
    password: string;
};

const signUp = async (data: signUpDTO) => {
    return axios.post('/auth/sign-up', data);
};
