import { RegisterBookForm } from '../components/RegisterBookForm';
import { ContentLayout } from '@/components/Layout';

export const RegisterBook = () => {
    return (
        <ContentLayout title="書籍登録" description="書籍を登録します">
            <div className="max-w-[400px] mx-auto">
                <h2 className="text-xl mb-4">書籍一覧</h2>
                <div className="flex justify-center">
                    <RegisterBookForm />
                </div>
            </div>
        </ContentLayout>
    );
};
