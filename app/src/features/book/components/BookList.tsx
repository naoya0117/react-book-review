import { useBookList } from '../api/getBookList';
import { useState } from 'react';

type PagenationProps = {
    page: number;
    setPage: (page: number) => void;
};
const Pagenation = ({ page, setPage }: PagenationProps) => {
    const handlePageChange = (page: number) => {
        if (page < 1) {
            setPage(1);
        }
    };

    return (
        <div className="flex-row">
            <button onClick={() => handlePageChange(page - 1)}>前へ</button>
            <span>{page}</span>
            <button onClick={() => handlePageChange(page + 1)}>次へ</button>
        </div>
    );
};

export const BookList = () => {
    const bookListQuery = useBookList({ offset: 0 });

    const [page, setPage] = useState(1);

    if (bookListQuery.isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="css-container">
            {bookListQuery.data?.map((book) => (
                <div key={book.id} className="card">
                    <p className="card__title">{book.title}</p>
                    <p>{book.url}</p>
                </div>
            ))}
            <Pagenation page={page} setPage={setPage} />
        </div>
    );
};
