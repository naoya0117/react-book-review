import { Button } from '@/components/Elements';
import { Form } from '@/components/Form';

export const SignUpForm = () => {
    return (
        <Form>
            <label>メールアドレス</label>
            <input type="email" />
            <label>パスワード</label>
            <input type="password" />
            <Button type="submit">新規登録</Button>
        </Form>
    );
};
