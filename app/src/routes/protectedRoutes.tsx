import { Navigate, Outlet } from 'react-router-dom';
import { MainLayout } from '@/components/Layout';
import { RegisterBook, BookDetail, BookList, EditBook } from '@/features/book';
import { UserIconUploader } from '@/features/avatar';
import { UpdateProfile } from '@/features/user';

const App = () => (
    <MainLayout>
        <Outlet />
    </MainLayout>
);

export const protectedRoutes = [
    {
        element: <App />,
        children: [
            { path: '/', element: <BookList /> },
            { path: '/new', element: <RegisterBook /> },
            { path: '/edit/:id', element: <EditBook /> },
            { path: '/detail/:id', element: <BookDetail /> },
            { path: '/signup', element: <Navigate to="/" /> },
            { path: '/login', element: <Navigate to="/" /> },
            { path: '/user/avatar', element: <UserIconUploader /> },
            { path: '/user/profile', element: <UpdateProfile /> },
        ],
    },
];
