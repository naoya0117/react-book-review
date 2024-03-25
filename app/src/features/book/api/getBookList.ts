import { axios } from '@/lib/axios';
import { useQuery } from 'react-query';

export const getBookList = () => {
    return axios.get('/books');
};

export const useBookList = () => {};
