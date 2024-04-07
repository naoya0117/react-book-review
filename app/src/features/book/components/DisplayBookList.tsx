import { useBookList } from '../api/getBookList';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import { Link } from '@/components/Elements';
import { postLog } from '../api/postLog';

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

export const DisplayBookList = () => {
    const [page, setPage] = useState(1);
    const { user } = useAuth();
    const bookListQuery = useBookList({ isLogin: user ? true : false, offset: (page - 1) * 10 });

    useEffect(() => {
        bookListQuery.refetch();
    }, [page, user]);

    if (bookListQuery.isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="booklist">
            {bookListQuery.data?.map((book) => (
                <Link
                    key={book.id}
                    to={`/detail/${book.id}`}
                    className="card"
                    onClick={async () => {
                        await postLog({ selectBookId: book.id });
                    }}
                >
                    <p className="card__title">{book.title}</p>
                    {book.isMine && <Link to={`/edit/${book.id}`}>編集</Link>}
                </Link>
            ))}
            <Pagenation page={page} setPage={setPage} />
        </div>
    );
};
