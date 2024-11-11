// Завдання 1
// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

function rectangleArea(width, height) {
    if (width ===0 || height === 0) {
        return 'Error: The values cannot be zero';
    }
    return width * height;
}

console.log(rectangleArea(10, 0));