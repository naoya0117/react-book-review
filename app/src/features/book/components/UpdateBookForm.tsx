import { z } from 'zod';
import { useEffect } from 'react';
import { useUpdateBook } from '../api/updateBook';
import { Form, TextField } from '@/components/Form';
import { Button } from '@/components/Elements';
import { useBook } from '../api/getBook';
import { useParams } from 'react-router-dom';

const schema = z.object({
    title: z.string().min(1, { message: '必須項目です' }),
    url: z.string().min(1, { message: '必須項目です' }),
    detail: z.string().min(1, { message: '必須項目です' }),
    review: z.string().min(1, { message: '必須項目です' }),
});

type RegisterBookValues = z.infer<typeof schema>;

export const UpdateBookForm = () => {
    const { id } = useParams<{ id: string }>();

    const bookQery = useBook({ id: id ?? '' });
    const updateBookMutation = useUpdateBook({ id: id ?? '' });

    useEffect(() => {
        bookQery.refetch();
    }, [id]);

    if (bookQery.isLoading || !bookQery.data) {
        return <div>Loading...</div>;
    }

    return (
        <Form<RegisterBookValues, typeof schema>
            onSubmit={(data) => {
                updateBookMutation.mutateAsync(data);
            }}
            className="w-96 border p-4 rounded-md shadow-md"
            options={{
                defaultValues: {
                    title: bookQery.data?.title,
                    url: bookQery.data?.url,
                    detail: bookQery.data?.detail,
                    review: bookQery.data?.review,
                },
            }}
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
