export class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    printInfo() {
        console.log(`title: ${this.title}, author: ${this.author}, year: ${this.year}`);
    }
static oldestBook(books) {
    if (books.length === 0) {
        throw new Error ('The array cannot be empty');
    }
        return books.reduce((oldest, current) => {
            if (current.year < oldest.year) {
                return current;
            } else {
                return oldest;
            }
        });
    }
}