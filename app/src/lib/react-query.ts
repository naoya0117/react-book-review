import { DefaultOptions, QueryClient } from 'react-query';

const queryConfig: DefaultOptions = {
    queries: {
        useErrorBoundary: true,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        retry: 1,
    },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
