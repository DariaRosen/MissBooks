export const googleBookService = {
    query
}

function query(txt) {
    const API = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${encodeURIComponent(txt)}`
    
    // Promise chain used to fetch data from a web API
    return fetch(API) // make a network request (GET by default) to the URL in the API variable. It returns a Promise that resolves to a Response object.
        .then(res => res.json()) //Promise resolves (i.e., we got a response from the server), this line parses the response body as JSON.
        .then(data => data.items) //An array of book objects in the case of the Google Books API
}
