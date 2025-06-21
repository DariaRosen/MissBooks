import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
    const [availableAuthors, setAvailableAuthors] = useState([])

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])
    
    useEffect(() => {
        const authors = bookService.getAuthors()
        setAvailableAuthors(authors)
    }, [])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        console.log("00000000000000000000");
        
        switch (type) {
            case 'range':
            case 'number':
                value = +value
                break
            case 'checkbox':
                value = target.checked
                break
            case 'select-multiple':
                value = Array.from(target.selectedOptions, option => option.value)
                break
        }
        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    const { txt, minPrice, authors } = filterByToEdit
    
    return (
        <section className="book-filter">
            <h2>Filter Our Books</h2>
            <form>
                <label htmlFor="txt">Title</label>
                <input onChange={handleChange} value={txt} name="txt" type="text" id="txt" />

                <label htmlFor="minPrice">Min Price</label>
                <input onChange={handleChange } value={minPrice || ''} name="minPrice" type="number" id="minPrice" /> {/*use empty string avoid aapearens of 0*/}

                <label htmlFor="authors">Authors</label>
                <select onChange={handleChange} value={authors} name="authors" id="authors">
                    <option value="">All Authors</option>
                    {availableAuthors.map(author => (
                        <option key={author} value={author}>
                            {author}
                        </option>
                    ))}
                </select>
            </form>
        </section>
    )
}



/*
function handleTxtChange({ target }) {
    const value = target.value
    setFilterByToEdit(prevFilter => ({ ...prevFilter, txt: value }))
}
 
function handleMinSpeedChange({ target }) {
    const value = target.value
    setFilterByToEdit(prevFilter => ({ ...prevFilter, minSpeed: value }))
}
*/
