// Створіть функцію handleNum яка буде приймати 3 параметри.
// число
// Колбек функцію яку треба викликати якщо передане число парне
// Колбек функцію яку треба викликати якщо передане число непарне
// Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd. Кожна з них має виводити просте повідомлення в консоль. Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст “number is odd”
// Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше

const handleEven = () => {
    console.log('Even number')
};

const handleOdd = () => {
    console.log('The number is not even')
};

const handleNum = (number, callback1, callback2) => {
    if (number % 2 === 0) {
        callback1()
    }
    else {
        callback2()
    }
};
 
handleNum(3, handleEven, handleOdd);