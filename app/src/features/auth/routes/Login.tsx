import { ContentLayout } from '@/components/Layout';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
    return (
        <ContentLayout titile="ログイン" description="ログイン画面です">
            <div className="max-w-[400px] mx-auto mt-[100px]">
                <h2 className="text-xl mb-4">ログイン</h2>
                <div className="flex justify-center">
                    <LoginForm />
                </div>
            </div>
        </ContentLayout>
    );
};
