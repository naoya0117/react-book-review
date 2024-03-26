import { useQuery } from 'react-query';
import { axios } from '@/lib/axios';
import { Book } from '../types';

export const getBookList = ({ offset = 0 }): Promise<Book[]> => {
    return axios.get('/books', {
        params: {
            offset,
        },
    });
};

type UseBookListOptions = {
    offset?: number;
};

export const useBookList = ({ offset = 0 }: UseBookListOptions) => {
    return useQuery({
        queryKey: ['books', offset],
        queryFn: () => getBookList({ offset }),
    });
};
