import { z } from 'zod';
import { Form, TextField } from '@/components/Form';
import { Button } from '@/components/Elements';
import { useAuth } from '@/lib/auth';
import { useUpdateProfile } from '../api/updateProfile';

export const UpdateProfileForm = () => {
    const { user } = useAuth();
    const updateProfileMutation = useUpdateProfile();
    const schema = z.object({
        name: z
            .string()
            .min(1, { message: '必須項目です' })
            .max(32, { message: '名前は32文字以下で入力してください' })
            .refine((data) => data !== user?.name, {
                message: '変更がありません',
            }),
    });

    type ProfileValue = z.infer<typeof schema>;

    return (
        <Form<ProfileValue, typeof schema>
            schema={schema}
            onSubmit={async (data) => {
                await updateProfileMutation.mutateAsync(data);
            }}
            options={{ defaultValues: { name: user?.name ?? '' } }}
        >
            {({ register, formState: { errors } }) => (
                <>
                    <TextField
                        label="名前"
                        id="name"
                        {...register('name')}
                        error={errors.name?.message}
                        required
                    />
                    <Button type="submit">更新</Button>
                </>
            )}
        </Form>
    );
};
