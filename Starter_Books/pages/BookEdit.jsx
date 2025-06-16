
import { bookService } from "../services/book.service.js"
import { loadFromStorage } from "../services/util.service.js"

const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouterDOM

console.log("000000000000000");
export function BookEdit() {

    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const { bookId } = useParams()
    const navigate = useNavigate()
    console.log("111111111111111");
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

    const { vendor, speed } = bookToEdit
    console.log('vendor, speed :', vendor, speed )
    return (
        <section className="book-edit">
            <h1>{bookId ? 'Edit' : 'Add'} Book</h1>
            <form onSubmit={onSaveBook}>
                <label htmlFor="vendor">Vendor</label>
                <input onChange={handleChange} type="text" value={vendor} name="vendor" id="vendor" />

                <label htmlFor="speed">Speed</label>
                <input onChange={handleChange} type="number" value={speed} name="speed" id="speed" />
                <button>Save</button>
            </form>
        </section>
    )

}
