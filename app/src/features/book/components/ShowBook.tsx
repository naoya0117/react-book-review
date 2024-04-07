import { useParams } from 'react-router-dom';
import { useBook } from '../api/getBook';
import { useEffect } from 'react';

export const ShowBook = () => {
    const { id } = useParams<{ id: string }>();
    const bookQuery = useBook({ id: id ?? '' });

    useEffect(() => {
        bookQuery.refetch();
    }, [id]);

    if (bookQuery.isLoading || !bookQuery.data) {
        return <div>Loading...</div>;
    }

    const { title, url, detail, review, reviewer, isMine } = bookQuery.data;

    return (
        <div className="max-w-4xl mx-auto my-8 p-4 shadow-lg rounded-lg w-[80%]">
            <table className="w-full table-auto">
                <thead className="text-left bg-gray-200">
                    <tr>
                        <th className="px-4 py-2">Property</th>
                        <th className="px-4 py-2">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Title</td>
                        <td className="border px-4 py-2">{title}</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border px-4 py-2">URL</td>
                        <td className="border px-4 py-2">
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700"
                            >
                                Link
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Detail</td>
                        <td className="border px-4 py-2">{detail}</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Review</td>
                        <td className="border px-4 py-2">{review}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Reviewer</td>
                        <td className="border px-4 py-2">{reviewer}</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border px-4 py-2">IsMine</td>
                        <td className="border px-4 py-2">{isMine ? 'Yes' : 'No'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
