import { Outlet, useRoutes } from 'react-router-dom';
import { MainLayout } from '@/components/Layout';
import { useAuth } from '@/lib/auth';
import { protectedRoutes } from './protectedRoutes';
import { publicRoutes } from './publicRoutes';

const App = () => (
    <MainLayout>
        <Outlet />
    </MainLayout>
);

export const AppRoutes = () => {
    const { user } = useAuth();

    // 共通のルート
    const commonRoutes = [
        {
            element: <App />,
            children: [{ path: '*', element: <div className="text-center">404 Not Found</div> }],
        },
    ];

    console.log(user);
    const routes = user ? protectedRoutes : publicRoutes;

    return useRoutes([...routes, ...commonRoutes]);
};
