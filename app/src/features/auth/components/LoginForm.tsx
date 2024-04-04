import { z } from 'zod';
import { Button } from '@/components/Elements';
import { Form, TextField } from '@/components/Form';
import { useAuth } from '@/lib/auth';

export const LoginForm = () => {
    const { login } = useAuth();

    //バリデーションを定義
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
        <Form<z.infer<typeof schema>, typeof schema>
            schema={schema}
            onSubmit={async (data) => {
                await login(data);
            }}
            className="w-96 border p-4 rounded-md shadow-md"
        >
            {/* ログインフォーム */}
            {({ register, formState: { errors } }) => (
                <>
                    <TextField
                        label="メールアドレス"
                        id="login-email"
                        {...register('email')}
                        error={errors.email?.message}
                        data-testid="login-email"
                        required
                    />
                    <TextField
                        label="パスワード"
                        id="login-password"
                        type="password"
                        {...register('password')}
                        error={errors.password?.message}
                        data-testid="login-password"
                        required
                    />
                    <Button type="submit" data-testid="login-submit">
                        登録
                    </Button>
                </>
            )}
        </Form>
    );
};
