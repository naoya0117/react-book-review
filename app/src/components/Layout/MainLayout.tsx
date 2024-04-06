import { useAuth } from '@/lib/auth';
import { Button } from '../Elements';

type MainLayoutProps = {
    children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    const { logout } = useAuth();

    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-gray-800 p-4 flex justify-end">
                <Button onClick={() => logout()}>Logout</Button>
            </div>
            <div className="text-white p-4">
                <main className="flex-grow">{children}</main>
            </div>
        </div>
    );
};
