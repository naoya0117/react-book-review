import { Navigate, Outlet } from 'react-router-dom';
import { MainLayout } from '@/components/Layout';
import { Book } from '@/features/book';
import { UserIconUploader } from '@/features/avatar/routes/UserIconUploader';

const App = () => (
    <MainLayout>
        <Outlet />
    </MainLayout>
);

export const protectedRoutes = [
    {
        element: <App />,
        children: [
            { path: '/', element: <Book /> },
            { path: '/signup', element: <Navigate to="/" /> },
            { path: '/login', element: <Navigate to="/" /> },
            { path: '/user/avatar', element: <UserIconUploader /> },
        ],
    },
];
