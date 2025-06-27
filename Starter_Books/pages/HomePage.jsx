const { useRef, useEffect } = React

export function HomePage() {
    const h1Ref = useRef()

    useEffect(() => {
        console.log('h1Ref:', h1Ref)
    }, [])

    return (
        <section className="home">
            <h1 className="animate__animated animate__bounce" ref={h1Ref}>Book's R Us!</h1>
            <img src="assets/img/react.png" alt="hero-image" />
            <div>
                <h2><i className="fas fa-book"></i> The Great Gatsby</h2>
                <button><i className="fas fa-edit"></i> Edit</button>
                <button><i className="fas fa-trash-alt"></i> Delete</button>
                <h3><i className="fas fa-heart"></i> I ♥ Books</h3>
            </div>
        </section>
    )
}