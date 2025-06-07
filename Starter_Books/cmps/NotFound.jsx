const { Link } = ReactRouterDOM

export function NotFound() {

    return (
        <section className="not-found-container">
            <section className="not-found">
                <h2>Ooops... Error <span style={{ color: 'red' }}>404</span></h2>
            </section>
            <p>
                Sorry but the page you are looking for does not exist.
            </p>
            <Link to="/home">Back</Link>
        </section>
    )
}