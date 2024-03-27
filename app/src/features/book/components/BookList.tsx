import { useBookList } from '../api/getBookList';
import { useEffect } from 'react';
import { useState } from 'react';

type PagenationProps = {
    page: number;
    setPage: (page: number) => void;
};
const Pagenation = ({ page, setPage }: PagenationProps) => {
    const handlePageChange = (page: number) => {
        if (page < 1) {
            setPage(1);
            return;
        }
        setPage(page);
    };

    return (
        <div className="pagenation">
            <button className="pagenation__item" onClick={() => handlePageChange(page - 1)}>
                前へ
            </button>
            <span className="pagenation__current">{page}</span>
            <button className="pagenation__item" onClick={() => handlePageChange(page + 1)}>
                次へ
            </button>
        </div>
    );
};

export const BookList = () => {
    const [page, setPage] = useState(1);
    const bookListQuery = useBookList({ offset: (page - 1) * 10 });

    useEffect(() => {
        bookListQuery.refetch();
    }, [page]);

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
