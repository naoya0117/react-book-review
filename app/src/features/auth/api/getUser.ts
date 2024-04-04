import { axios } from '@/lib/axios';

export type User = {
    name: string;
    iconUrl: string;
};

export const getUser = async (): Promise<User> => {
    return await axios.get('/users');
};
