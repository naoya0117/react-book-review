import { ContentLayout } from '@/components/Layout';
import { UpdateBookForm } from '../components/UpdateBookForm';

export const EditBook = () => {
    return (
        <ContentLayout title="書籍編集" description="書籍を編集します">
            <div className="max-w-[400px] mx-auto">
                <h2 className="text-xl mb-4">レビュー編集</h2>
                <UpdateBookForm />
            </div>
        </ContentLayout>
    );
};
