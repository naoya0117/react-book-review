import { ContentLayout } from '@/components/Layout';
import { SignUpForm } from '../components/SignUpForm';
import { Link } from '@/components/Elements';

export const SignUp = () => {
    return (
        <ContentLayout title="新規登録ページ" description="新規登録ページです">
            <div className="max-w-[400px] mx-auto">
                <h2 className="text-xl mb-4">新規登録</h2>
                <div className="flex justify-center">
                    <SignUpForm />
                </div>
                <div className="flex justify-center mt-3">
                    <Link to="/login">ログインはこちら</Link>
                </div>
            </div>
        </ContentLayout>
    );
};
