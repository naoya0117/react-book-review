import { NavMenu } from './NavMenu';

type MainLayoutProps = {
    children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavMenu />
            <div className="p-4">
                <main className="flex-grow">{children}</main>
            </div>
        </div>
    );
};
