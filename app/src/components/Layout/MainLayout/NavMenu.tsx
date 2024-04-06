import { Button } from '@/components/Elements';
import { useAuth } from '@/lib/auth';

const Logo = () => {
    return (
        <div className="text-2xl font-bold">
            <a href="/" className="text-white">
                Bookshelf
            </a>
        </div>
    );
};

const AuthButton = () => {
    const { user, logout } = useAuth();
    const isLogin = user !== null;

    return (
        <div>
            {isLogin ? (
                <Button onClick={logout} className="text-white">
                    Logout
                </Button>
            ) : (
                <Button onClick={() => (window.location.href = '/login')} className="text-white">
                    Login
                </Button>
            )}
        </div>
    );
};

export const NavMenu = () => {
    return (
        <div className="bg-gray-800">
            <div className="p-4 flex justify-between max-w-[1200px] mx-auto">
                <Logo />
                <AuthButton />
            </div>
        </div>
    );
};
