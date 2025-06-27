import { bookService } from "../services/book.service.js"
import { LongTxt } from "../cmps/LongTxt.jsx"
import { AddReview } from "../cmps/AddReview.jsx"

const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [params.bookId])

    function loadBook() {
        bookService.get('bookDB', params.bookId)
            .then(setBook)
            .catch(err => {
                console.log('err:', err)
            })
    }

    function onBack() {
        navigate('/book')
    }

    console.log('Render', params)
    if (!book) return <div>Loading...</div>
    return (
        <section className="book-details">
            <h1 className="animate__animated animate__bounce">Book Title:</h1>
            <h2 style={{ fontFamily: 'Lobster, cursive' }}>Subtitle: {book.subtitle}</h2>
            {/* <h2>Subtitle: {book.subtitle}</h2> */}
            <h3>Authors: {book.authors.join(', ')}</h3>
            <h4>Published: {book.publishedDate} {publishedDate(book.publishedDate)}</h4>
            <h4>Page Count: {book.pageCount} {readingDifficulty(book.pageCount)}</h4>
            <h4>Language: {book.language}</h4>
            <h4>Categories: {book.categories.join(', ')}</h4>
            <h4 className={priceColor(book.listPrice.price)}>
                Price: {book.listPrice.price} {book.listPrice.currencyCode}
            </h4>
            {book.listPrice && book.listPrice.isOnSale && (
                <img src="./assets/img/sale.jpg" alt="On Sale" className="sale-badge" />)}
            <h3>Book description:</h3>
            <LongTxt txt={book.description} />
            <img src={book.imgUrl} alt="book-image" />
            <h2>Reviews: </h2>
            <AddReview book={book} />
            <button onClick={onBack}>Back</button>
            <section>
                <Link to={`/book/${book.prevBookId}`}><button>Prev Book</button></Link>
                <Link to={`/book/${book.nextBookId}`}><button>Next Book</button></Link>
            </section>
        </section>
    )
}

function readingDifficulty(pageCount) {
    console.log('pageCount:', pageCount)
    if (pageCount > 500) return '   (Serious reading)'
    if (pageCount > 200) return '   (Descent reading)'
    if (pageCount < 100) return '   (Light reading)'
    return 'Unknown reading difficulty'
}
function publishedDate(publishedDate) {
    const currentYear = new Date().getFullYear()
    const yearDiff = currentYear - publishedDate
    if (yearDiff < 1) return '   (New Release)'
    if (yearDiff < 10) return '   (Vintage Release)'
    return ''
}
function priceColor(price) {
    if (price > 150) return 'price-high'
    if (price < 20) return 'price-low'
    return ''
}


