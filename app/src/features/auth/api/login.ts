import { axios } from '@/lib/axios';
import { queryClient } from '@/lib/react-query';
import { useMutation } from 'react-query';

type LoginDTO = {
    email: string;
    password: string;
};

const login = async (data: LoginDTO) => {
    const response = await axios.post('/login', data);
    return response.data;
};

export const useLogin = () => {
    return useMutation(login, {
        onSuccess: (data) => {
            queryClient.setQueryData('user', data);
        },
    });
};
