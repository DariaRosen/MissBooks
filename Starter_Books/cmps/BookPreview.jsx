
export function BookPreview({ book }) {
    return (
        <article className="book-preview">
            <h2>Title: {book.title}</h2>
            <h4>Book Price: {book.listPrice && book.listPrice.amount} {book.listPrice && book.listPrice.currencyCode}</h4>
            <p>Status: {book.listPrice && book.listPrice.isOnSale ? 'On Sale!' : 'Regular Price'}</p>
            {/*<img src={`../assets/img/${book.vendor}.png`} alt="book-image" />*/}
            <img src={`./assets/img/${_bookName()}.jpg`} alt="book-image" />
            <h5>Book description:</h5>
            <p>{_getBookPreviewText(book)}</p>
        </article>
    )
}

function _bookName() {
    return Math.floor(Math.random() * 20 + 1);
}

// Generates a description text for the book
function _getBookPreviewText(book) {
    return `Discover "${book.title}", a captivating story brought to you by ${book.vendor || "a renowned publisher"}. Dive into a world of imagination and adventure.`
}
