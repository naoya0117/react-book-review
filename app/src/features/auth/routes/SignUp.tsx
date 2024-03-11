import { ContentLayout } from '@/components/Layout';
import { SignUpForm } from '../components/SignUpForm';

export const SignUp = () => {
    return (
        <ContentLayout titile="新規登録" description="新規登録ページです">
            <h2 className="text-xl mb-4">新規登録</h2>
            <SignUpForm />
        </ContentLayout>
    );
};
