import { Head } from '@/components/Head';

type ContentLayoutProps = {
    children: React.ReactNode;
    title: string;
    description: string;
};

export const ContentLayout = ({ children, title, description }: ContentLayoutProps) => {
    return (
        <div>
            <Head title={title} description={description} />
            <div className="mx-auto max-w-[1200px] w-[90%]">
                <main>{children}</main>
            </div>
        </div>
    );
};
