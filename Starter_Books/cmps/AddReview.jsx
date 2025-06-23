import { bookService } from "../services/book.service.js"
const { useState } = React

export function AddReview({ book }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [reviews, setReviews] = useState(book.reviews || [])

    function onAddReview() {
        setIsModalOpen(true)
    }

    function onSaveReview(ev) {
        ev.preventDefault()
        const fullname = ev.target.fullname.value
        const rating = ev.target.rating.value
        const readAt = ev.target.readAt.value

        const newReview = { fullname, rating, readAt }
        const updatedReviews = [...reviews, newReview]

        const updatedBook = { ...book, reviews: updatedReviews }

        bookService.save(updatedBook)
            .then(() => {
                setReviews(updatedReviews) // Update UI
                setIsModalOpen(false)      // Close modal
            })
            .catch(err => {
                console.error('Error saving review:', err)
            })
    }

    return (
        <section className="add-review">
            <button onClick={onAddReview}>Add new review</button>

            {reviews.length > 0 ? (
                <div className="book-review">
                    <h3>Reviews</h3>
                    <ul>
                        {reviews.map((review, idx) => (
                            <li key={idx}>
                                <p>
                                    <strong>{review.fullname}</strong> rated it{" "}
                                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                </p>
                                <p>Read on: {review.readAt}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No reviews for this book yet.</p>
            )}

            {isModalOpen && (
                <div className="modal">
                    <form className="review-form" onSubmit={onSaveReview}>
                        <label>
                            Full Name:
                            <input type="text" name="fullname" required />
                        </label>
                        <label>
                            Rating:
                            <select name="rating" required>
                                <option value="1">1 ★</option>
                                <option value="2">2 ★★</option>
                                <option value="3">3 ★★★</option>
                                <option value="4">4 ★★★★</option>
                                <option value="5">5 ★★★★★</option>
                            </select>
                        </label>
                        <label>
                            Read At:
                            <input type="date" name="readAt" required />
                        </label>
                        <div className="modal-actions">
                            <button type="submit">Save</button>
                            <button type="button" onClick={() => setIsModalOpen(false)}>Close</button>
                        </div>
                    </form>
                </div>
            )}
        </section>
    )
}
