import { Navigate } from 'react-router-dom';
import { Login, SignUp } from '@/features/auth';

//未認証時のルーティング
export const publicRoutes = [
    { path: '/', element: <Navigate to="/login" /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
];
