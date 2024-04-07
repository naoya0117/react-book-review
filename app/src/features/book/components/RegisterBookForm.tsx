import { z } from 'zod';
import { usePostBook } from '../api/postBook';
import { Form, TextField } from '@/components/Form';
import { Button } from '@/components/Elements';

const schema = z.object({
    title: z.string().min(1, { message: '必須項目です' }),
    url: z.string().min(1, { message: '必須項目です' }),
    detail: z.string().min(1, { message: '必須項目です' }),
    review: z.string().min(1, { message: '必須項目です' }),
});

type RegisterBookValues = z.infer<typeof schema>;

export const RegisterBookForm = () => {
    const postBookMutation = usePostBook();

    return (
        <Form<RegisterBookValues, typeof schema>
            onSubmit={(data) => {
                postBookMutation.mutate(data);
            }}
            className="w-96 border p-4 rounded-md shadow-md"
        >
            {({ register, formState: { errors } }) => (
                <>
                    <TextField
                        label="タイトル"
                        id="book-title"
                        {...register('title')}
                        error={errors.title?.message}
                        required
                    />
                    <TextField
                        label="URL"
                        id="book-url"
                        {...register('url')}
                        error={errors.url?.message}
                        required
                    />
                    <TextField
                        label="説明"
                        id="book-detail"
                        {...register('detail')}
                        error={errors.detail?.message}
                        required
                    />
                    <TextField
                        label="感想"
                        id="book-review"
                        {...register('review')}
                        error={errors.review?.message}
                        required
                    />
                    <Button type="submit" className="mt-4">
                        登録
                    </Button>
                </>
            )}
        </Form>
    );
};
