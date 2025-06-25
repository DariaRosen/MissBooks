const { useState, useEffect } = React

export function BookAdd() {
    const allBooks = [
        { id: 'b101', title: 'The Pragmatic Programmer' },
        { id: 'b102', title: 'Clean Code' },
        { id: 'b103', title: 'JavaScript: The Good Parts' },
        { id: 'b104', title: 'Effective JavaScript' },
        { id: 'b105', title: 'Refactoring' },
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

        const timeoutId = setTimeout(() => {
            const term = searchTerm.toLowerCase()
            const filtered = allBooks.filter(book =>
                book.title.toLowerCase().includes(term)
            )
            setFilteredBooks(filtered)
            setIsTyping(false)
        }, 300)

        return () => clearTimeout(timeoutId)
    }, [searchTerm])

    function onAddBook(book) {
        console.log('Adding book to database:', book)
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

            {/* Show list only when user has typed and debounce is complete */}
            {!isTyping && filteredBooks.length > 0 && (
                <ul>
                    {filteredBooks.map(book => (
                        <li key={book.id}>
                            {book.title}
                            <button onClick={() => onAddBook(book)}>➕</button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}
