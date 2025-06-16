import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { getTruthyValues } from "../services/util.service.js"

const { useEffect, useState } = React

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
        //setSearchParams(getTruthyValues(filterBy))
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then(setBooks)
            .catch(err => {
                console.log('Problems getting books:', err)
            })
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId)
            .then(() => {
                setBooks(books => books.filter(book => book.id !== bookId))                
                showSuccessMsg('Book removed successfully!')
            })
            .catch(err => {
                console.log('Problems removing book:', err)
                showErrorMsg('Problem removing book!')
            })
    }

    function onSetFilter(filterBy) {
        console.log(filterBy);
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy })) // save current props (filterBy overwhrite properties in prevFilter if exist )
        
        
    }

    if (!books) return <div>Loading...</div>
    return (
        <section className="book-index">
            <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} />
            <BookList
                books={books}
                onRemoveBook={onRemoveBook}
            />

        </section>
    )

}