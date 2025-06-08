
export function BookPreview({ book }) {
    return (
        <article className="book-preview">
            <h2>Title: {book.title}</h2>
            <h4>Book Price: {book.listPrice && book.listPrice.amount} {book.listPrice && book.listPrice.currencyCode}</h4>
            <p>Status: {book.listPrice && book.listPrice.isOnSale ? 'On Sale!' : 'Regular Price'}</p>
            {/*<img src={`../assets/img/${book.vendor}.png`} alt="book-image" />*/}
            <img src={book.imgUrl} alt="book-image" />
            <h5>Book description:</h5>
            <p>{book.description}</p>
        </article>
    )
}

