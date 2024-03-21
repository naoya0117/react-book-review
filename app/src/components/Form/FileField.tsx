import React from 'react';

type FileFieldProps = {
    label: string;
    error?: string | undefined;
    className?: string;
    required?: boolean;
    id: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

//ファイルをアップロードするためのフォームフィールド
export const FileField = React.forwardRef<HTMLInputElement, FileFieldProps>(
    ({ error, label, required = false, className, ...props }: FileFieldProps, ref) => {
        return (
            <label className="block text-sm font-medium text-gray-700" htmlFor={props.id}>
                {label} {required && <span className="text-red-500">*</span>}
                <input
                    ref={ref}
                    type="file"
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
                    required={required}
                    {...props}
                />
                <div className="h-10">
                    <div className="text-red-500" data-testid={`error-${props.id}`}>
                        {error}
                    </div>
                </div>
            </label>
        );
    }
);

FileField.displayName = 'FileField';
