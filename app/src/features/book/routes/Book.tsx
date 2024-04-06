import { ContentLayout } from '@/components/Layout';
import { BookList } from '../components/BookList';

export const Book = () => {
    return (
        <ContentLayout title="書籍一覧" description="書籍一覧ページです。">
            <div className="max-w-[400px] mx-auto">
                <h2 className="text-xl mb-4">書籍一覧</h2>
                <div className="flex justify-center">
                    <BookList />
                </div>
            </div>
        </ContentLayout>
    );
};
