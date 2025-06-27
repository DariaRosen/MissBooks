const { useState, useEffect } = React
import { bookService } from '../services/book.service.js'
import { googleBookService } from '../services/google-book.service.js'

export function BookAdd() {
    const allBooks = [

        {
            "id": "b101",
            "title": "The Pragmatic Programmer",
            "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
            "authors": [
                "Barbara Cartland"
            ],
            "publishedDate": 1999,
            "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
            "pageCount": 713,
            "categories": [
                "Computers",
                "Hack"
            ],
            "imgUrl": "./assets/img/20.jpg",
            "language": "en",
            "listPrice": {
                "price": 19,
                "currencyCode": "EUR",
                "isOnSale": false
            }
        },
        {
            "id": "b102",
            "title": "Clean Code",
            "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
            "authors": [
                "Barbara Cartland"
            ],
            "publishedDate": 1999,
            "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
            "pageCount": 713,
            "categories": [
                "Computers",
                "Hack"
            ],
            "imgUrl": "./assets/img/20.jpg",
            "language": "en",
            "listPrice": {
                "price": 129,
                "currencyCode": "EUR",
                "isOnSale": false
            }
        },
        {
            "id": "b103",
            "title": "JavaScript: The Good Parts",
            "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
            "authors": [
                "Barbara Cartland"
            ],
            "publishedDate": 1999,
            "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
            "pageCount": 713,
            "categories": [
                "Computers",
                "Hack"
            ],
            "imgUrl": "./assets/img/20.jpg",
            "language": "en",
            "listPrice": {
                "price": 709,
                "currencyCode": "EUR",
                "isOnSale": false
            }
        },
        {
            "id": "b104",
            "title": "Effective JavaScript",
            "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
            "authors": [
                "Barbara Cartland"
            ],
            "publishedDate": 1999,
            "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
            "pageCount": 713,
            "categories": [
                "Computers",
                "Hack"
            ],
            "imgUrl": "./assets/img/20.jpg",
            "language": "en",
            "listPrice": {
                "price": 209,
                "currencyCode": "EUR",
                "isOnSale": false
            }
        },
        {
            "id": "b105",
            "title": "Refactoring",
            "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
            "authors": [
                "Barbara Cartland"
            ],
            "publishedDate": 1999,
            "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
            "pageCount": 713,
            "categories": [
                "Computers",
                "Hack"
            ],
            "imgUrl": "./assets/img/20.jpg",
            "language": "en",
            "listPrice": {
                "price": 100,
                "currencyCode": "EUR",
                "isOnSale": false
            }
        },
    ]

    const [searchTerm, setSearchTerm] = useState('')
    const [filteredBooks, setFilteredBooks] = useState([])
    const [isTyping, setIsTyping] = useState(false)

    useEffect(() => {
        if (!searchTerm) {
            setFilteredBooks([])
            return
        }

        setIsTyping(true)

        // const timeoutId = setTimeout(() => {
        //     const term = searchTerm.toLowerCase()
        //     const filtered = allBooks.filter(book =>
        //         book.title.toLowerCase().includes(term)
        //     )
        //     setFilteredBooks(filtered)
        //     setIsTyping(false)
        // }, 300)

        const timeoutId = setTimeout(() => {
            googleBookService.query(searchTerm)
                .then(googleBooks => {
                    if (!googleBooks) return setFilteredBooks([])

                    const mappedBooks = googleBooks.map(bookService.mapGoogleBookToAppBook)
                    setFilteredBooks(mappedBooks)
                })
                .catch(err => {
                    console.error('❌ Error fetching from Google Books:', err)
                })
                .finally(() => setIsTyping(false))
        }, 300)

        return () => clearTimeout(timeoutId)
    }, [searchTerm])

    function onAddBook(book) {
        // next code able to add some dummy books to the database

        // bookService.getFromMemory(book.id)
        // bookService.get('bookDB', book.id)
        //     .then(existingBook => {
        //         if (existingBook) {
        //             console.log('✅ Book already exists:', existingBook)
        //             // book exists, ignore adding
        //             return
        //         }

        //         // book not found, save it
        //         console.log('📚 Book not found, saving:', book)
        //         const newGoogleBook = true
        //         bookService.save(book, newGoogleBook)
        //     })
        //     .catch(err => {
        //         console.error('❌ Unexpected error while checking book:', err)
        //     })
        debugger
        bookService.addGoogleBook(book)
            .then(added => {
                if (!added) console.log('Already exists')
                else console.log('Added:', added)
            })
            .catch(err => console.error('❌ Error:', err))

    }


    return (
        <section className="book-add">
            <h1>Initial Stock</h1>

            <input
                type="text"
                placeholder="Search for a book..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {!isTyping && filteredBooks.length > 0 && (
                <ul className="book-list">
                    {filteredBooks.map(book => (
                        <li key={book.id} className="book-item">
                            <span className="book-title">{book.title}</span>
                            <button className="add-btn" onClick={() => onAddBook(book)}>➕</button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}
