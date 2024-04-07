import { ContentLayout } from '@/components/Layout';
import { ShowBook } from '../components/ShowBook';

export const BookDetail = () => {
    return (
        <ContentLayout title="書籍詳細" description="書籍詳細ページです。">
            <div className="max-w-[400px] mx-auto">
                <h2 className="text-xl mb-4">書籍詳細</h2>
                <div className="flex justify-center">
                    <ShowBook />
                </div>
            </div>
        </ContentLayout>
    );
};
