import { z } from 'zod';
import { Button } from '@/components/Elements';
import { postUserIcon } from '../api/postUserIcon';
import Compressor from 'compressorjs';
import { FileField, Form } from '@/components/Form';

export const UserIconForm = () => {
    const schema = z.object({
        avatar: z
            .any()
            .refine((image) => image instanceof File, {
                message: 'ファイルを選択してください',
            })
            .refine((image) => ['image/png', 'image/jpeg'].includes(image.type), {
                message: 'pngまたはjpg形式の画像を選択してください',
            }),
    });

    type UserIconFormValues = z.infer<typeof schema>;

    return (
        <Form<UserIconFormValues, typeof schema>
            schema={schema}
            onSubmit={async (data) => {
                //画像を圧縮してアップロード
                await new Promise(() => {
                    new Compressor(data.avatar, {
                        quality: 0.6,
                        success: (result) => {
                            data.avatar = result;
                        },
                    });
                });

                const formdata = new FormData();
                formdata.append('icon', data.avatar);

                await postUserIcon(formdata);
            }}
            data-testid="user-icon-uploader"
        >
            {({ setValue, formState: { errors } }) => (
                <>
                    <FileField
                        label="プロフィール画像登録"
                        id="user-icon"
                        error={
                            typeof errors.avatar?.message === 'string'
                                ? errors.avatar.message
                                : undefined
                        }
                        onChange={(e) => setValue('avatar', e.target.files?.[0])}
                        data-testid="user-icon"
                        required
                    />
                    <Button type="submit">アップロード</Button>
                </>
            )}
        </Form>
    );
};
