import { Outlet } from 'react-router-dom';
import { MainLayout } from '@/components/Layout';
import { Login, SignUp } from '@/features/auth';
import { BookList } from '@/features/book';

const App = () => {
    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    );
};

//未認証時のルーティング
export const publicRoutes = [
    {
        element: <App />,
        children: [
            { path: '/', element: <BookList /> },
            { path: '/login', element: <Login /> },
            { path: '/signup', element: <SignUp /> },
        ],
    },
];
