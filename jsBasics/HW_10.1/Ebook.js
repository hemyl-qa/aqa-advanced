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
}
