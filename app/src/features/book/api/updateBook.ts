import { axios } from '@/lib/axios';
import { BookDTO, Book } from '../types';
import { useMutation } from 'react-query';

type UpdateBook = {
    id: string;
    data: BookDTO;
};

const updateBook = async ({ id, data }: UpdateBook): Promise<Book> => {
    return await axios.put(`/books/${id}`, data);
};

type UseUpdateOptions = {
    id: string;
};

export const useUpdateBook = ({ id }: UseUpdateOptions) => {
    return useMutation({
        onSuccess: () => {
            alert('変更が送信されました');
        },
        mutationFn: (data: BookDTO) => updateBook({ id: id, data: data }),
    });
};
