
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

    const { txt, minAmount } = filterByToEdit
    return (
        <section className="book-filter">
            <h2>Filter Our Books</h2>
            <form>
                <label htmlFor="txt">Title</label>
                <input onChange={handleChange} value={txt} name="txt" type="text" id="txt" />

                <label htmlFor="minAmount">Min Amount</label>
                <input onChange={handleChange} value={minAmount} name="minAmount" type="number" id="minAmount" />
            </form>
        </section>
    )
}