const BooksController = require ('../controllels/BooksController');
const AccountsController = require ('../controllels/AccountsController');
const axios = require('axios');

const booksList = require('./books');

const userId = "bcd76a9d-17a2-4f58-898b-f1a9ced6349b";

test('Get all Books', async () => {
    const response = await BooksController.getAllBooks();
    console.log(response.data);

    expect(response.status).toBe(200);
});

let token; 

describe('Adding Books', () =>{
    beforeAll(async () => {
        token = await AccountsController.getAuthToken();
        console.log('Generated Token:', token);
        const response = await BooksController.deleteAllUserBooks(userId, token);
        expect(response.status).toBe(204);
    })
    
    test('Add a book 1', async () => {
        const response = await BooksController.addBook(userId, booksList[0].isbn, token);
        console.log(response.data);
    
        expect(response.status).toBe(201);
        expect(response.data.books[0].isbn).toBe(booksList[0].isbn)
    });
    
    test('Add a book 3', async () => {
        const response = await BooksController.addBook(userId, booksList[2].isbn, token);
        console.log(response.data);
    
        expect(response.status).toBe(201);
        expect(response.data.books[0].isbn).toBe(booksList[2].isbn)
    });

    test('Add a book 5', async () => {
        const response = await BooksController.addBook(userId, booksList[4].isbn, token);
        console.log(response.data);
    
        expect(response.status).toBe(201);
        expect(response.data.books[0].isbn).toBe(booksList[4].isbn)
    });

    test('Delete a book 5', async () => {
        const response = await BooksController.deleteOneUserBook(userId, booksList[4].isbn, token);
        console.log(response.data);
    
        expect(response.status).toBe(200);
    });
} )


