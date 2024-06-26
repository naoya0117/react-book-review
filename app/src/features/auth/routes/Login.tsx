import { ContentLayout } from '@/components/Layout';
import { LoginForm } from '../components/LoginForm';
import { Link } from '@/components/Elements';

export const Login = () => {
    return (
        <ContentLayout title="ログイン" description="ログイン画面です">
            <div className="max-w-[400px] mx-auto">
                <h2 className="text-xl mb-4">ログイン</h2>
                <div className="flex justify-center">
                    <LoginForm />
                </div>
                <div className="flex justify-center mt-3">
                    <Link to="/signup">はじめての方はこちらから</Link>
                </div>
            </div>
        </ContentLayout>
    );
};
