import { Head } from '@/components/Head';

type ContentLayoutProps = {
    children: React.ReactNode;
    titile: string;
    description: string;
};

export const ContentLayout = ({ children, titile, description }: ContentLayoutProps) => {
    return (
        <div>
            <Head title={titile} description={description} />
            <body className="mx-auto max-w-[1200px] w-[90%]">
                <main>{children}</main>
            </body>
        </div>
    );
};
