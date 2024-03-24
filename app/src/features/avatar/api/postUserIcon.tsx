import { axios } from '@/lib/axios';

export const postUserIcon = async (data: FormData) => {
    return await axios.post('/uploads', data);
};
