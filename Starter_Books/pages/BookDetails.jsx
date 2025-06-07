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
            <h1>Book Vendor: {book.vendor}</h1>
            <h1>Book Speed: {book.speed}</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quae fuga eveniet, quisquam ducimus modi optio in alias accusantium corrupti veritatis commodi tenetur voluptate deserunt nihil quibusdam. Expedita, architecto omnis?</p>
            <img src={`../assets/img/${book.vendor}.png`} alt="book-image" />
            <button onClick={onBack}>Back</button>
            <section>
                <Link to={`/book/${book.prevBookId}`}><button>Prev Book</button></Link>
                <Link to={`/book/${book.nextBookId}`}><button>Next Book</button></Link>
            </section>
        </section>
    )
}