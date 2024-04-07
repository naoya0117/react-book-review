import { axios } from '@/lib/axios';

export const postLog = async ({ selectBookId }: { selectBookId: string }) => {
    return await axios.post('/logs', { selectBookId: selectBookId });
};
