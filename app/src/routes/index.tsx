import { Outlet, useRoutes } from 'react-router-dom';
import { MainLayout } from '@/components/Layout';
import { NotFound } from '@/features/misc';
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
    const routes = user ? protectedRoutes : publicRoutes;

    // 共通のルート
    const commonRoutes = [
        {
            element: <App />,
            children: [{ path: '*', element: <NotFound /> }],
        },
    ];

    return useRoutes([...routes, ...commonRoutes]);
};
