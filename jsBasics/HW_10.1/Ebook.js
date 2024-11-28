import { Book } from './Book.js';

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year); 
        this.fileFormat = fileFormat;
    }

    printInfo() {
        console.log(
            `title: ${this.title}, author: ${this.author}, year: ${this.year}, file format: ${this.fileFormat}`
        );
    }

    get title() {
        return this._title;
    }

    set title(title) {
        if (typeof title !== 'string') {
            console.log('Wrong title');
        } else {
            this._title = title;
            console.log(`Title set to: ${title}`);
        }
    }
    get author() {
        return this._author;
    }

    set author(author) {
        if (typeof author !== 'string') {
            console.log('Wrong author');
        } else {
            this._author = author;
            console.log(`Author set to: ${author}`);
        }
    }
    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(fileFormat) {
        if (typeof fileFormat !== 'string') {
            console.log('Wrong File Format');
        } else {
            this._fileFormat = fileFormat;
            console.log(`Author set to: ${fileFormat}`);
        }
    }
    get year() {
        return this._year;
    }

    set year(year) {
        if (typeof year !== 'number' || String(year).length !== 4) {
            console.log('Wrong year format');
        } else {
            this._year = year;
            console.log(`Year set to: ${year}`);
        }
    }
    static newEbook(book, fileFormat) {
            return new EBook(book.title, book.author, book.year, fileFormat);
            }
}
