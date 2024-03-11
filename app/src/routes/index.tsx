import { Outlet, useRoutes } from 'react-router-dom';
import { MainLayout } from '@/components/Layout';
import { Login, SignUp } from '@/features/auth/routes';

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
                { path: '*', element: <div className="text-center">404 Not Found</div> },
            ],
        },
    ];

    return useRoutes(commonRoutes);
};
