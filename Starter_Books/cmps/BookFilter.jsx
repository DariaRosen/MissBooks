
const { useState, useEffect } = React
export function BookFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

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
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
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

    const { txt, minPrice } = filterByToEdit
    return (
        <section className="book-filter">
            <h2>Filter Our Books</h2>
            <form>
                <label htmlFor="txt">Vendor</label>
                <input onChange={handleChange} value={txt} name="txt" type="text" id="txt" />

                <label htmlFor="minPrice">Min Price</label>
                <input onChange={handleChange} value={minPrice} name="minPrice" type="number" id="minPrice" />
            </form>
        </section>
    )
}