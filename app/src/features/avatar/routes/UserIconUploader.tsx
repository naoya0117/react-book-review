import { ContentLayout } from '@/components/Layout';
import { UserIconForm } from '../components/UserIconForm';

export const UserIconUploader = () => {
    return (
        <ContentLayout title="アイコン設定" description="アイコン設定ページです">
            <div className="max-w-[400px] mx-auto mt-[100px]">
                <h2 className="text-xl mb-4">アイコン設定</h2>
                <UserIconForm />
            </div>
        </ContentLayout>
    );
};
