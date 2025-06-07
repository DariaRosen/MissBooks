
export function BookPreview({ book }) {

    return (
        <article className="book-preview">
            <h2>Vendor: {book.vendor}</h2>
            <h4>Book Speed: {book.speed}</h4>
            <img src={`../assets/img/${book.vendor}.png`} alt="book-image" />
        </article>
    )
}