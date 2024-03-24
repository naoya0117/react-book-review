import { ContentLayout } from '@/components/Layout';
import { UserIconForm } from '../components/UserIconForm';

export const UserIconUploader = () => {
    return (
        <ContentLayout title="アイコン設定" description="アイコン設定ページです">
            <h2 className="text-xl mb-4">アイコン設定</h2>
            <UserIconForm />
        </ContentLayout>
    );
};
