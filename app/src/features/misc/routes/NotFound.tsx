import { Button } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';

export const NotFound = () => {
    return (
        <ContentLayout title="404 Not Found" description="Page not found">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl font-bold text-gray-800">404</h1>
                <p className="text-gray-500">ページが見つかりませんでした</p>
                <Button className="mt-4" onClick={() => window.history.back()}>
                    Go Back
                </Button>
            </div>
        </ContentLayout>
    );
};
