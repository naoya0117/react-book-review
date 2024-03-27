import { useQuery } from 'react-query';
import { axios } from '@/lib/axios';
import { Book } from '../types';

type GetBookListOptions = {
    offset?: number;
};

export const getBookList = ({ offset = 0 }: GetBookListOptions): Promise<Book[]> => {
    return axios.get('/books', {
        params: {
            offset: offset,
        },
    });
};

type UseBookListOptions = {
    offset?: number;
};

export const useBookList = ({ offset = 0 }: UseBookListOptions) => {
    return useQuery({
        queryKey: ['books', offset],
        queryFn: () => getBookList({ offset: offset }),
    });
};
