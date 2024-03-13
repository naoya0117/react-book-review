import { Button } from '@/components/Elements';
import { Form, TextField } from '@/components/Form';
import { z } from 'zod';

export const LoginForm = () => {
    const schema = z.object({
        email: z
            .string()
            .min(1, { message: '必須項目です' })
            .email({ message: '無効なメールアドレスです' }),
        password: z
            .string()
            .min(1, { message: '必須項目です' })
            .min(8, { message: 'パスワードは8文字以上で入力してください' }),
    });

    return (
        <Form
            schema={schema}
            onSubmit={(data) => {
                console.log(data);
            }}
            className="w-96 border p-4 rounded-md shadow-md"
        >
            {({ register, formState: { errors } }) => (
                <>
                    <TextField
                        label="メールアドレス"
                        id="signup-email"
                        {...register('email')}
                        error={errors.email?.message}
                        required
                    />
                    <TextField
                        label="パスワード"
                        id="signup-password"
                        type="password"
                        {...register('password')}
                        error={errors.password?.message}
                        required
                    />
                    <Button type="submit">登録</Button>
                </>
            )}
        </Form>
    );
};
