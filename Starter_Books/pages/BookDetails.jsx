import { bookService } from "../services/book.service.js"

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
        bookService.get(params.bookId)
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
            <h1>Book Title: {book.title}</h1>
            <h2>Subtitle: {book.subtitle}</h2>
            <h3>Authors: {book.authors.join(', ')}</h3>
            <h4>Published: {book.publishedDate}</h4>
            <h4>Page Count: {book.pageCount}</h4>
            <h4>Language: {book.language}</h4>
            <h4>Categories: {book.categories.join(', ')}</h4>




            <h1>Book Amount: {book.Amount}</h1>
            <p>{book.description}</p>
            <img src={book.imgUrl} alt="book-image" />
            <button onClick={onBack}>Back</button>
            <section>
                <Link to={`/book/${book.prevBookId}`}><button>Prev Book</button></Link>
                <Link to={`/book/${book.nextBookId}`}><button>Next Book</button></Link>
            </section>
        </section>
    )
}

