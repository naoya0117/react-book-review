import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Button } from '@/components/Elements';
import { Form, TextField } from '@/components/Form';
import { useAuth } from '@/lib/auth';

export const SignUpForm = () => {
    const { signUp } = useAuth();
    const navigate = useNavigate();

    //バリデーションを定義
    const schema = z
        .object({
            name: z
                .string()
                .min(1, { message: '必須項目です' })
                .min(2, { message: '名前は2文字以上で入力してください' })
                .max(32, { message: '名前は32文字以下で入力してください' }),
            email: z
                .string()
                .min(1, { message: '必須項目です' })
                .email({ message: '無効なメールアドレスです' }),
            password: z
                .string()
                .min(1, { message: '必須項目です' })
                .min(8, { message: 'パスワードは8文字以上で入力してください' }),
            confirm: z.string().min(1, { message: '必須項目です' }),
        })
        .refine((data) => data.password === data.confirm, {
            message: 'パスワードが一致しません',
            path: ['confirm'],
        });

    //バリデーションの型を取得
    type SignUpValues = z.infer<typeof schema>;

    return (
        <Form<SignUpValues, typeof schema>
            schema={schema}
            onSubmit={async (data) => {
                //送信データからconfirmを除外
                //eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { confirm, ...withoutConfirm } = data;
                //サインアップ処理
                await signUp(withoutConfirm);
                new Promise((resolve) => setTimeout(resolve, 1000));
                navigate('/user/avatar');
            }}
            className="w-96 border p-4 rounded-md shadow-md"
            data-testid="signup-form"
        >
            {({ register, formState: { errors } }) => (
                <>
                    <TextField
                        label="名前"
                        id="signup-name"
                        {...register('name')}
                        error={errors.name?.message}
                        data-testid="signup-name"
                        required
                    />
                    <TextField
                        label="メールアドレス"
                        id="signup-email"
                        {...register('email')}
                        error={errors.email?.message}
                        data-testid="signup-email"
                        required
                    />
                    <TextField
                        label="パスワード"
                        id="signup-password"
                        type="password"
                        {...register('password')}
                        error={errors.password?.message}
                        data-testid="signup-password"
                        required
                    />
                    <TextField
                        label="パスワード（確認）"
                        id="signup-confirm"
                        type="password"
                        error={errors.confirm?.message}
                        {...register('confirm')}
                        data-testid="signup-confirm"
                        required
                    />
                    <Button type="submit" data-testid="signup-submit">
                        登録
                    </Button>
                </>
            )}
        </Form>
    );
};
