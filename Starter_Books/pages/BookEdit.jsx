
import { bookService } from "../services/book.service.js"
import { loadFromStorage } from "../services/util.service.js"
import { BookAdd } from "../cmps/BookAdd.jsx"

const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouterDOM

export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const { bookId } = useParams()
    const navigate = useNavigate()
    const [debouncedInputs, setDebouncedInputs] = useState({
        title: bookToEdit.title || '',
        price: (bookToEdit.listPrice && bookToEdit.listPrice.price) || 0,
    })

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setBookToEdit(prevBook => ({
                ...prevBook,
                title: debouncedInputs.title,
                listPrice: {
                    ...prevBook.listPrice,
                    price: +debouncedInputs.price,
                }
            }))
        }, 300)

        return () => clearTimeout(timeoutId)
    }, [debouncedInputs])

    useEffect(() => {
        if (bookId) loadBook()
    }, [])

    function loadBook() {
        bookService.get('bookDB', bookId)
            .then(book => setBookToEdit(book))
            .catch(err => {
                console.log('Problem getting book', err);
                // navigate()
            })
    }

    function handleChange({ target }) {
        const { name, value } = target
        setDebouncedInputs(prev => ({
            ...prev,
            [name]: value,
        }))
    }


    function onSaveBook(ev) {
        console.log("onSaveBook");
        ev.preventDefault()

        // Only continue if ID or title exists
        if (!bookToEdit.id && !bookToEdit.title) {
            console.warn('Cannot save: Missing book ID and title')
            return
        }

        console.log('bookToEdit.id', bookToEdit.id)

        bookService.save(bookToEdit, false)
            .then((savedBook) => {
                console.log('✅ savedBook:', savedBook)
                navigate('/book')
            })
            .catch(err => console.error('❌ Save failed:', err))
    }

    function onBack() {
        navigate('/book')
    }

    const { title, listPrice } = bookToEdit
    const price = listPrice.price

    console.log('title, price :', title, listPrice)
    console.log("booToedit", bookToEdit)
    return (
        <section className="book-edit">
            <h1 className="animate__animated animate__bounce">{bookId ? 'Edit' : 'Add'} Book</h1>
            <form onSubmit={onSaveBook}>
                <label htmlFor="title">Title</label>
                <input
                    onChange={handleChange}
                    type="text"
                    value={debouncedInputs.title}
                    name="title"
                    id="title"
                />

                <label htmlFor="price">Price</label>
                <input
                    onChange={handleChange}
                    type="number"
                    value={debouncedInputs.price}
                    name="price"
                    id="price"
                />

                {!bookId && (
                    <div>
                        <br />
                        <br />
                        {<BookAdd />}
                    </div>
                )}

                <button>Save</button>
                <button onClick={onBack}>Back</button>
            </form>
        </section>
    )

}
