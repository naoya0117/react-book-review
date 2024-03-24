import React from 'react';

type FileFieldProps = {
    label: string;
    error?: string | undefined;
    className?: string;
    required?: boolean;
    id: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

//ファイルをアップロードするためのフォームフィールド
export const FileField = React.forwardRef<HTMLInputElement, FileFieldProps>(
    (
        { error, id, label, required = false, className, onChange, ...props }: FileFieldProps,
        ref
    ) => {
        return (
            <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
                {label} {required && <span className="text-red-500">*</span>}
                <input
                    ref={ref}
                    type="file"
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
                    required={required}
                    onChange={onChange}
                    {...props}
                />
                <div className="h-10">
                    <div className="text-red-500" data-testid={`error-${id}`}>
                        {error}
                    </div>
                </div>
            </label>
        );
    }
);

FileField.displayName = 'FileField';
