import { loadFromStorage, makeId, saveToStorage } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
const books = [
    {
        "id": "OXeMG8wNskc",
        "title": "metus hendrerit",
        "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
        "authors": [
            "Barbara Cartland"
        ],
        "publishedDate": 1999,
        "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
        "pageCount": 713,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/20.jpg",
        "language": "en",
        "listPrice": {
            "price": 109,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    },
    {
        "id": "JYOJa2NpSCq",
        "title": "morbi",
        "subtitle": "lorem euismod dictumst inceptos mi",
        "authors": [
            "Barbara Cartland"
        ],
        "publishedDate": 1978,
        "description": "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
        "pageCount": 129,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/14.jpg",
        "language": "sp",
        "listPrice": {
            "price": 44,
            "currencyCode": "EUR",
            "isOnSale": true
        }
    },
    {
        "id": "1y0Oqts35DQ",
        "title": "at viverra venenatis",
        "subtitle": "gravida libero facilisis rhoncus urna etiam",
        "authors": [
            "Dr. Seuss"
        ],
        "publishedDate": 1999,
        "description": "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
        "pageCount": 972,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/2.jpg",
        "language": "he",
        "listPrice": {
            "price": 108,
            "currencyCode": "ILS",
            "isOnSale": false
        }
    },
    {
        "id": "kSnfIJyikTP",
        "title": "dictum",
        "subtitle": "augue eu consectetur class curabitur conubia ligula in ullamcorper",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 1978,
        "description": "interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam",
        "pageCount": 303,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/16.jpg",
        "language": "en",
        "listPrice": {
            "price": 30,
            "currencyCode": "EUR",
            "isOnSale": true
        }
    },
    {
        "id": "f4iuVmbuKCC",
        "title": "sem himenaeos aptent",
        "subtitle": "interdum per habitasse luctus purus est",
        "authors": [
            "Dr. Seuss"
        ],
        "publishedDate": 2011,
        "description": "et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",
        "pageCount": 337,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/12.jpg",
        "language": "sp",
        "listPrice": {
            "price": 19,
            "currencyCode": "USD",
            "isOnSale": false
        }
    },
    {
        "id": "U2rfZO6oBZf",
        "title": "mi ante posuere",
        "subtitle": "sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus",
        "authors": [
            "Leo Tolstoy"
        ],
        "publishedDate": 1978,
        "description": "senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in",
        "pageCount": 748,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/1.jpg",
        "language": "en",
        "listPrice": {
            "price": 91,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {
        "id": "xI0wrXaaAcq",
        "title": "non",
        "subtitle": "leo tortor per dapibus mattis ut conubia porttitor ligula viverra",
        "authors": [
            "Leo Tolstoy"
        ],
        "publishedDate": 2011,
        "description": "nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",
        "pageCount": 65,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/14.jpg",
        "language": "he",
        "listPrice": {
            "price": 90,
            "currencyCode": "USD",
            "isOnSale": false
        }
    },
    {
        "id": "9laHCEdSpFy",
        "title": "tristique",
        "subtitle": "consectetur a eu tincidunt condimentum amet nisi",
        "authors": [
            "Dr. Seuss"
        ],
        "publishedDate": 1999,
        "description": "magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",
        "pageCount": 299,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/11.jpg",
        "language": "he",
        "listPrice": {
            "price": 176,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    },
    {
        "id": "nGhVwZvGCGp",
        "title": "urna ornare gravida",
        "subtitle": "sem vestibulum semper convallis pharetra tempor himenaeos ut",
        "authors": [
            "Jin Yong"
        ],
        "publishedDate": 2011,
        "description": "porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla",
        "pageCount": 803,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/10.jpg",
        "language": "sp",
        "listPrice": {
            "price": 116,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {
        "id": "Q8Q9Lsd03BD",
        "title": "consequat neque volutpat",
        "subtitle": "vel quis taciti fermentum feugiat ullamcorper curae praesent",
        "authors": [
            "Dr. Seuss"
        ],
        "publishedDate": 1978,
        "description": "curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",
        "pageCount": 891,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/5.jpg",
        "language": "en",
        "listPrice": {
            "price": 145,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    },
    {
        "id": "bd7a76kARao",
        "title": "risus",
        "subtitle": "pretium bibendum pharetra curabitur quisque dictumst",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 2018,
        "description": "auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus",
        "pageCount": 86,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/16.jpg",
        "language": "sp",
        "listPrice": {
            "price": 157,
            "currencyCode": "ILS",
            "isOnSale": true
        }
    },
    {
        "id": "qKyG0vqeO3e",
        "title": "interdum etiam vulputate",
        "subtitle": "velit sapien eget tincidunt nunc tortor",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 2018,
        "description": "aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad",
        "pageCount": 882,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/17.jpg",
        "language": "sp",
        "listPrice": {
            "price": 57,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {
        "id": "2RvT48ZNInj",
        "title": "sagittis justo",
        "subtitle": "etiam primis proin praesent placerat nisi fermentum nisi",
        "authors": [
            "Agatha Christie"
        ],
        "publishedDate": 2011,
        "description": "nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus",
        "pageCount": 598,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/8.jpg",
        "language": "en",
        "listPrice": {
            "price": 167,
            "currencyCode": "ILS",
            "isOnSale": false
        }
    },
    {
        "id": "5z2s9pDXAYj",
        "title": "quam ullamcorper himenaeos",
        "subtitle": "ut placerat eu dapibus sapien sodales laoreet",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 1999,
        "description": "etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam",
        "pageCount": 608,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/3.jpg",
        "language": "he",
        "listPrice": {
            "price": 150,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {
        "id": "zBZu5cDEWha",
        "title": "quis",
        "subtitle": "suscipit turpis etiam turpis libero lobortis",
        "authors": [
            "Jin Yong"
        ],
        "publishedDate": 2011,
        "description": "etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",
        "pageCount": 583,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/6.jpg",
        "language": "en",
        "listPrice": {
            "price": 58,
            "currencyCode": "ILS",
            "isOnSale": true
        }
    },
    {
        "id": "aOI7tQuPZ2f",
        "title": "aliquam aliquet dapibus",
        "subtitle": "neque eu purus euismod placerat adipiscing odio egestas consequat",
        "authors": [
            "Leo Tolstoy"
        ],
        "publishedDate": 2011,
        "description": "dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",
        "pageCount": 497,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/7.jpg",
        "language": "en",
        "listPrice": {
            "price": 78,
            "currencyCode": "USD",
            "isOnSale": false
        }
    },
    {
        "id": "WBooB82Uvwu",
        "title": "class",
        "subtitle": "elit enim ultricies amet imperdiet a molestie class elementum venenatis",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 1999,
        "description": "rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",
        "pageCount": 804,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/10.jpg",
        "language": "en",
        "listPrice": {
            "price": 118,
            "currencyCode": "ILS",
            "isOnSale": false
        }
    },
    {
        "id": "xm1z5bbZjlS",
        "title": "vitae",
        "subtitle": "class habitant at commodo semper ligula a bibendum",
        "authors": [
            "Leo Tolstoy"
        ],
        "publishedDate": 1999,
        "description": "himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",
        "pageCount": 231,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/12.jpg",
        "language": "he",
        "listPrice": {
            "price": 60,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    },
    {
        "id": "u3j6QIKLlJb",
        "title": "rhoncus vivamus",
        "subtitle": "nullam class risus amet senectus scelerisque etiam curabitur",
        "authors": [
            "Agatha Christie"
        ],
        "publishedDate": 1978,
        "description": "torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",
        "pageCount": 652,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/20.jpg",
        "language": "he",
        "listPrice": {
            "price": 110,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {
        "id": "vxYYYdVlEH3",
        "title": "donec mi ullamcorper",
        "subtitle": "varius malesuada augue molestie sollicitudin faucibus mi eu tempus",
        "authors": [
            "William Shakespeare"
        ],
        "publishedDate": 2011,
        "description": "aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",
        "pageCount": 904,
        "categories": [
            "Computers",
            "Hack"
        ],
        "imgUrl": "./assets/img/2.jpg",
        "language": "sp",
        "listPrice": {
            "price": 186,
            "currencyCode": "ILS",
            "isOnSale": true
        }
    }
]

if (!books || !books.length) {
    _createBooks()
}
// else {
//     // for (let i = 0; i < books.length; i++) {
//     //     books[i].id = books[i].id || makeId()
//     //     saveSingleBook(books[i]) // Save each book individually
//     // }
// }



function query(filterBy = {}) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regExp.test(book.title))
            }
            if (filterBy.minprice) {
                books = books.filter(book => book.price >= filterBy.minprice)
            }
            if (filterBy.authors) {
                console.log("filterBy.authors", filterBy.authors);
                books = books.filter(book => book.authors.includes(filterBy.authors) )
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
    console.log("book.id", book.id)
    if (book.id) {
        console.log("33333333333")
        return storageService.put(BOOK_KEY, book)
    } else {
        console.log("44444444")
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', price = 0) {
    
    return {
            title,
            subtitle: utilService.makeLorem(4),
            authors: [
                utilService.makeLorem(1)
            ],
            publishedDate: utilService.getRandomIntInclusive(1950, 2024),
            description: utilService.makeLorem(20),
            pageCount: utilService.getRandomIntInclusive(20, 600),
            categories: [],
            imgUrl: `./assets/img/${1}.jpg`,
            language: "en",
            listPrice: {
                price,
                currencyCode: "EUR",
                isOnSale: Math.random() > 0.7
            }
        }
}

function getDefaultFilter() {
    return { txt: '', minprice: '' }
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
    // if (!books || !books.length) {
    //     books = [
    //         _createBook('Harry Potter', 120, 'A young wizard embarks on a journey to defeat the dark wizard Voldemort.'),
    //         _createBook('The Hobbit', 80, 'A hobbit named Bilbo Baggins goes on an unexpected adventure with a group of dwarves.'),
    //         _createBook('The Great Gatsby', 200, 'A story of love, wealth, and the American Dream set in the 1920s.'),
    //     ]
    //     saveToStorage(BOOK_KEY, books)
    // }

    if (!books || !books.length) {
        books = _createBooksDemo()
        saveToStorage(BOOK_KEY, books)
    }
}

// function _createBook(title, price = 250, description = '') {
//     const book = getEmptyBook(title, price)
//     book.id = makeId()
//     book.description = description || _getBookPreviewText(book)
//     book.imgUrl = `./assets/img/${_bookName()}.jpg` // Random image from assets
//     book.listPrice = {
//         price,
//         currencyCode: "EUR",
//         isOnSale: Math.random() < 0.5, // randomly true or false
//     }

//     return book
// }

// function _bookName() {
//     return Math.floor(Math.random() * 20 + 1);
// }

// // Generates a description text for the book
// function _getBookPreviewText(book) {
//     return `Discover "${book.title}", a captivating story brought to you by ${book.vendor || "a renowned publisher"}. Dive into a world of imagination and adventure.`
// }

export function saveSingleBook(book) {
    let books = loadFromStorage(BOOK_KEY) || []

    // Check if book with same ID exists
    const idx = books.findIndex(b => b.id === book.id)
    if (idx !== -1) {
        // Update existing book
        books[idx] = book
    } else {
        // Add new book
        books.push(book)
    }

    saveToStorage(BOOK_KEY, books)
}

function _createBooksDemo() {
    const ctgs = ['Love', 'Fiction', 'Poetry', 'Computers', 'Religion']
    const books = []
    for (let i = 0; i < 20; i++) {
        const book = {
            id: utilService.makeId(),
            title: utilService.makeLorem(2),
            subtitle: utilService.makeLorem(4),
            authors: [
                utilService.makeLorem(1)
            ],
            publishedDate: utilService.getRandomIntInclusive(1950, 2024),
            description: utilService.makeLorem(20),
            pageCount: utilService.getRandomIntInclusive(20, 600),
            categories: [ctgs[utilService.getRandomIntInclusive(0, ctgs.length - 1)]],
            imgUrl: `./assets/img/${i+1}.jpg`,
            language: "en",
            listPrice: {
                price: utilService.getRandomIntInclusive(80, 500),
                currencyCode: "EUR",
                isOnSale: Math.random() > 0.7
            }
        }
        books.push(book)
    }
    console.log('books', books)
    return books
}

function getAuthors() {

    const books = loadFromStorage(BOOK_KEY) || []
    const authors = books.map((book, index, arr)=>{
        return book.authors
    })
    //console.log(authors.flat())
    return [...new Set(authors.flat())]
}

function addReview(bookId, review) {
    // Use the existing 'get' function to retrieve the book by ID
    return get(bookId).then(book => {
        // Initialize the reviews array if it doesn't exist
        if (!book.reviews) book.reviews = []
        review.id = utilService.makeId() // Make sure each review has a unique ID
        // Add the new review
        book.reviews.push(review)

        // Save the updated book back to storage
        return save(book)
    })
}

function removeReview(bookId, reviewId) {
    return get(bookId).then(book => {
        if (!book.reviews) return book

        // Filter out the review with the given ID
        book.reviews = book.reviews.filter(review => review.id !== reviewId)

        // Save the updated book
        return save(book)
    })
}

function addGoogleBook(googleBook) {
    const id = googleBook.id
    const title = googleBook.volumeInfo && googleBook.volumeInfo.title

    const exists = booksDB.some(book => book.id === id || book.title === title)
    if (exists) {
        return Promise.resolve(null)
    }

    const bookToAdd = {
        id: id,
        title: title,
        authors: (googleBook.volumeInfo && googleBook.volumeInfo.authors) || [],
        description: (googleBook.volumeInfo && googleBook.volumeInfo.description) || '',
        thumbnail: (googleBook.volumeInfo &&
                    googleBook.volumeInfo.imageLinks &&
                    googleBook.volumeInfo.imageLinks.thumbnail) || ''
    }

    booksDB.push(bookToAdd)
    return Promise.resolve(bookToAdd)
}


function getBooks() {
    return Promise.resolve(booksDB)
}


   export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getDefaultFilter,
    getAuthors,
    addReview,
    removeReview,
    addGoogleBook,
    getBooks,
    }