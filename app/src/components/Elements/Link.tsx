import { Link as RouterLink, LinkProps } from 'react-router-dom';

export const Link = ({ to, children, className, ...props }: LinkProps) => (
    <RouterLink to={to} className={`text-blue-500 hover:text-blue-600 ${className}`} {...props}>
        {children}
    </RouterLink>
);
