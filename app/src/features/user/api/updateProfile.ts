import { useAuth } from '@/lib/auth';
import { axios } from '@/lib/axios';
import { useMutation } from 'react-query';

type ProfileDTO = {
    name: string;
};

const updateProfile = async (data: ProfileDTO): Promise<ProfileDTO> => {
    return await axios.put('/users', data);
};

export const useUpdateProfile = () => {
    const { refetchUser } = useAuth();

    return useMutation({
        onSuccess: () => {
            // 認証フックのuser情報を更新
            refetchUser();
        },
        mutationFn: (data: ProfileDTO) => updateProfile(data),
    });
};
