const { Link } = ReactRouterDOM

import { BookPreview } from "./BookPreview.jsx";

export function BookList({ books, onRemoveBook }) {

    return (
        <ul className="book-list">
            {books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section>
                        <button onClick={() => onRemoveBook(book.id)}> Remove</button>
                        <Link to={`/book/${book.id}`}><button >Details</button></Link>
                        <button >Edit</button>
                    </section>
                </li>
            )}
        </ul>
    )

}