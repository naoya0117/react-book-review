import { Button, Link } from '@/components/Elements';
import { useAuth } from '@/lib/auth';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="text-2xl font-bold">
            <Link to="/" className="text-white hover:text-white">
                Bookshelf
            </Link>
        </div>
    );
};

const AuthButton = () => {
    const { user, logout } = useAuth();
    const isLogin = user !== null;
    const navigate = useNavigate();

    return (
        <div>
            {isLogin ? (
                <div>
                    <Button onClick={() => navigate('/user/profile')} className="text-white mr-2">
                        Profile
                    </Button>
                    <Button
                        onClick={() => {
                            logout();
                            navigate('/');
                        }}
                        className="text-white"
                    >
                        Logout
                    </Button>
                </div>
            ) : (
                <Button onClick={() => navigate('/login')} className="text-white">
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
