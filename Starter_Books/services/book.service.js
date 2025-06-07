import { loadFromStorage, makeId, saveToStorage } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getDefaultFilter,
}

function query(filterBy = {}) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regExp.test(book.title))
            }
            if (filterBy.minAmount) {
                books = books.filter(book => book.Amount >= filterBy.minAmount)
            }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId).then(_setNextPrevBookId)
}

function remove(bookId) {
    // return Promise.reject('Oh No!')
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', Amount = '') {
    return { title, Amount }
}

function getDefaultFilter() {
    return { txt: '', minAmount: '' }
}


function _setNextPrevBookId(book) {
    return query().then((books) => {
        const bookIdx = books.findIndex((currBook) => currBook.id === book.id)
        const nextBook = books[bookIdx + 1] ? books[bookIdx + 1] : books[0]
        const prevBook = books[bookIdx - 1] ? books[bookIdx - 1] : books[books.length - 1]
        book.nextBookId = nextBook.id
        book.prevBookId = prevBook.id
        return book
    })
}

function _createBooks() {
    let books = loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = [
            _createBook('Harry Potter', 120, 'A young wizard embarks on a journey to defeat the dark wizard Voldemort.'),
            _createBook('The Hobbit', 80, 'A hobbit named Bilbo Baggins goes on an unexpected adventure with a group of dwarves.'),
            _createBook('The Great Gatsby', 200, 'A story of love, wealth, and the American Dream set in the 1920s.'),
        ]
        saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title, amount = 250, description = '') {
    const book = getEmptyBook(title, amount)
    book.id = makeId()
    book.description = description

    book.listPrice = {
        amount,
        currencyCode: "EUR",
        isOnSale: Math.random() < 0.5, // randomly true or false
    }

    return book
}
