import { ContentLayout } from '@/components/Layout';
import { UpdateProfileForm } from '../components/UpdateProfileForm';

export const UpdateProfile = () => {
    return (
        <ContentLayout title="プロフィール" description="プロフィールを編集します">
            <div className="max-w-[400px] mx-auto">
                <h2 className="text-xl mb-4">プロフィール</h2>
                <div className="flex justify-center">
                    <UpdateProfileForm />
                </div>
            </div>
        </ContentLayout>
    );
};
