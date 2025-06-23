import { bookService } from "../services/book.service.js"
const { useState } = React

export function AddReview({ book }) {
    // State for controlling the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false)
    // State for storing the current list of reviews (fallback to empty array)
    const [reviews, setReviews] = useState(book.reviews || [])

    // Open the review modal
    function onAddReview() {
        setIsModalOpen(true)
    }

    // Handle form submission to save a new review
    function onSaveReview(ev) {
        ev.preventDefault()

        // Extract input values from the form
        const fullname = ev.target.fullname.value
        const rating = +ev.target.rating.value // Convert to number
        const readAt = ev.target.readAt.value

        const newReview = { fullname, rating, readAt }

        // Save the new review using bookService and update the local state
        bookService.addReview(book.id, newReview).then(updatedBook => {
            setReviews(updatedBook.reviews) // Update UI with new review list
            setIsModalOpen(false)           // Close modal
        }).catch(err => {
            console.error('Error saving review:', err)
        })
    }

    return (
        <section className="add-review">
            {/* Button to trigger review form */}
            <button onClick={onAddReview}>Add new review</button>

            {/* Show reviews if they exist */}
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

            {/* Modal form for adding a new review */}
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
                            {/* Save and Close buttons */}
                            <button type="submit">Save</button>
                            <button type="button" onClick={() => setIsModalOpen(false)}>Close</button>
                        </div>
                    </form>
                </div>
            )}
        </section>
    )
}
