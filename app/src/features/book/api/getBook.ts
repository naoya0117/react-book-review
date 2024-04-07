import { useQuery } from 'react-query';
import { axios } from '@/lib/axios';
import { Book } from '../types';

const getBook = async (id: string): Promise<Book> => {
    return await axios.get(`/books/${id}`);
};

type UseBookOptions = {
    id: string;
};

export const useBook = ({ id }: UseBookOptions) => {
    return useQuery({
        queryKey: ['book', id],
        queryFn: () => getBook(id),
    });
};
