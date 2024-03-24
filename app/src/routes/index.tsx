import { Outlet, useRoutes } from 'react-router-dom';
import { MainLayout } from '@/components/Layout';
import { Login, SignUp } from '@/features/auth/routes';
import { UserIconUploader } from '@/features/avatar/routes/UserIconUploader';

const App = () => (
    <MainLayout>
        <Outlet />
    </MainLayout>
);

export const AppRoutes = () => {
    const commonRoutes = [
        {
            element: <App />,
            children: [
                { path: '/login', element: <Login /> },
                { path: '/signup', element: <SignUp /> },
                { path: '/user/avatar', element: <UserIconUploader /> },
                { path: '*', element: <div className="text-center">404 Not Found</div> },
            ],
        },
    ];

    return useRoutes(commonRoutes);
};
