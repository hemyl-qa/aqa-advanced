// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.
// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль


const book = {
    title: 'The Tower of the Swallow',
    autor: 'Andrzej Sapkowski',
    year: 1997,
};

const {title, autor, year} = book;

console.log(title);
console.log(autor);
console.log(year);