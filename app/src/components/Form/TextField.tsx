import React from 'react';

type TextFieldProps = {
    label: string;
    error?: string;
    required?: boolean;
    className?: string;
    type?: 'text' | 'password' | 'email' | 'number';
    id: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    ({ label, error, required, id, className, type, ...props }, ref) => {
        return (
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
                    {label}
                    {required && <span className="text-red-500">*</span>}
                </label>
                <input
                    ref={ref} // refをinput要素に割り当て
                    required={required}
                    id={id}
                    type={type || 'text'}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
                    {...props}
                />
                <div className="h-10">
                    <div className="text-red-500" data-testid={`error-${id}`}>
                        {error}
                    </div>
                </div>
            </div>
        );
    }
);

TextField.displayName = 'TextField';
