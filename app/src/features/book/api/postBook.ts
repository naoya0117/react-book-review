import { axios } from '@/lib/axios';
import { useMutation } from 'react-query';
import { BookDTO, Book } from '../types';

const postBook = async (data: BookDTO): Promise<Book> => {
    const res = await axios.post('/books', data);
    console.log(res.data);
    return res.data;
};

export const usePostBook = () => {
    return useMutation({
        onSuccess: () => {
            alert('本を登録しました');
        },
        mutationFn: (data: BookDTO) => postBook(data),
    });
};
