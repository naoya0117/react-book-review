import { useBookList } from '../api/getBookList';

export const BookList = () => {
    const bookListQuery = useBookList({ offset: 0 });

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
        </div>
    );
};
