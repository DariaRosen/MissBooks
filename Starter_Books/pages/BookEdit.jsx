
import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookEdit() {


    const isEdit = false
    return (
        <section onSubmit={onSaveBook} className="book-edit">
            <h1>{isEdit ? 'Edit' : 'Add'} Book</h1>
            <form>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />

                <label htmlFor="Amount">Amount</label>
                <input type="number" name="Amount" id="Amount" />
                <section className="btns flex">
                    <button>Save</button>
                    <button type="button" className="back-btn" >Back</button>
                </section>
            </form>
        </section>
    )

}