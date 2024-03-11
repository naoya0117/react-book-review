import React from 'react';
import { AppRoutes } from '@/routes';
import { AppProvider } from '@/providers/app';

export const App: React.FC = () => (
    <AppProvider>
        <AppRoutes />
    </AppProvider>
);
