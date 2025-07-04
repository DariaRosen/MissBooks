import { LongTxt } from "../cmps/LongTxt.jsx"
export function BookPreview({ book }) {
    return (
        <article className="book-preview">
            <h2>Title: {book.title}</h2>
            <h4>Price: {book.listPrice && book.listPrice.price} {book.listPrice && book.listPrice.currencyCode}</h4>
            {/* Main book image */}
            <img src={book.imgUrl} alt="book-image" />

            {/* Show onSale badge only if on sale */}
            {book.listPrice && book.listPrice.isOnSale && (
                <img
                    src="./assets/img/sale.jpg"
                    alt="on sale"
                    className="on-sale-badge"
                />
            )}
            <h5>Book description:</h5>
            <LongTxt txt={book.description} />            
        </article>
    )
}

