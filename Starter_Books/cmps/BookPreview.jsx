
export function BookPreview({ book }) {

    return (
        <article className="book-preview">
            <h2>Vendor: {book.vendor}</h2>
            <h4>Book Price: {book.Price}</h4>
            {/*<img src={`../assets/img/${book.vendor}.png`} alt="book-image" />*/}
            <img src={`../assets/img/${_bookName()}.jpg`} alt="book-image" />
        </article>
    )
}

function _bookName() {
    const a = Math.floor(Math.random() * 20 + 1);
    console.log('a:', a);
    return a;
}