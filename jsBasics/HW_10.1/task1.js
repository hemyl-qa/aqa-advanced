// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. 
// Додайте до класу EBook нову властивість, наприклад, "формат файлу". Сторіть метод printInfo для 
// EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). 
// Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo
// Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
// В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.
// Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. 
// Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)
// Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок та повертати екземпляр класу EBook


import { Book} from "./Book.js";
import { EBook } from "./Ebook.js";

const book1 = new Book('Sword of Destiny', 'Andrzej Sapkowski', 1992);
const book2 = new Book('The Lord of the Rings', 'J. R. R. Tolkien', 1954);
const book3 = new Book('Nine Princes in Amber','Roger Zelazny', 1970);

const ebook1 = new EBook('The Tower of Swallows', 'Andrzej Sapkowski', 1997, 'FB2');

const books = [book1, book2, book3, ebook1];

const oldBook = Book.oldestBook(books);

book1.printInfo();
book2.printInfo();
book3.printInfo();

console.log('--------------------------');

ebook1.printInfo();
ebook1.year = 19;
ebook1.year = 2024; 

console.log('--------------------------');

console.log('Oldest book is:');
oldBook.printInfo();