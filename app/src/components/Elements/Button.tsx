import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...props }: ButtonProps) => {
    return (
        <button
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-opacity-80 ${className}`}
            {...props}
        />
    );
};
