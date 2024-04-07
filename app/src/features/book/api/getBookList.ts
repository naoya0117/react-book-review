import { useQuery } from 'react-query';
import { axios } from '@/lib/axios';
import { Book } from '../types';

type GetBookListOptions = {
    offset?: number;
    isLogin: boolean;
};

export const getBookList = ({ offset = 0, isLogin }: GetBookListOptions): Promise<Book[]> => {
    const url = isLogin ? '/books' : 'public/books';

    return axios.get(url, {
        params: {
            offset: offset,
        },
    });
};

type UseBookListOptions = {
    offset?: number;
    isLogin: boolean;
};

export const useBookList = ({ isLogin, offset = 0 }: UseBookListOptions) => {
    return useQuery({
        queryKey: ['books', offset],
        queryFn: () => getBookList({ offset: offset, isLogin: isLogin }),
    });
};
