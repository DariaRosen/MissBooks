
import { bookService } from "../services/book.service.js"
import { loadFromStorage } from "../services/util.service.js"
import { BookAdd } from "../cmps/BookAdd.jsx"

const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouterDOM

export function BookEdit() {

    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const { bookId } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (bookId) loadBook()
    }, [])

    function loadBook() {
        bookService.get(bookId)
            .then(book => setBookToEdit(book))
            .catch(err => {
                console.log('Problem getting book', err);
                // navigate()
            })
    }

    function handleChange({ target }) {
        let { value, name: field } = target
        switch (target.type) {
            case 'range':
            case 'number':
                value = +target.value
                break
            case 'checkbox':
                value = target.checked
                break
        }
        setBookToEdit((prevBook) => ({ ...prevBook, [field]: value }))
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit)
            .then((savedBook) => {
                console.log('savedBook:', savedBook)
                navigate('/book')
            })
            .catch(err => console.log('err:', err))
    }

    const { title, price } = bookToEdit
    console.log('title, price :', title, price)
    return (
        <section className="book-edit">
            <h1>{bookId ? 'Edit' : 'Add'} Book</h1>
            <form onSubmit={onSaveBook}>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} type="text" value={title} name="title" id="title" />

                <label htmlFor="price">Price</label>
                <input onChange={handleChange} type="number" value={price} name="price" id="price" />

                {!bookId && (
                    <div>
                        <br />
                        <br />
                        {<BookAdd />}
                    </div>
                )}

                <button>Save</button>
            </form>
        </section>
    )

}
