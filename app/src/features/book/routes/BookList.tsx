import { ContentLayout } from '@/components/Layout';
import { Link } from '@/components/Elements';
import { DisplayBookList } from '../components/DisplayBookList';

export const BookList = () => {
    return (
        <ContentLayout title="書籍一覧" description="書籍一覧ページです。">
            <div className="max-w-[400px] mx-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl my-4">書籍一覧</h2>
                    <Link to="/new">レビューを登録する</Link>
                </div>
                <div className="flex justify-center">
                    <DisplayBookList />
                </div>
            </div>
        </ContentLayout>
    );
};
