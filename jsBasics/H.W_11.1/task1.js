// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент. 
// Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд


function testTimer(text, delay) {
    setTimeout(() => {
        console.log(text)
}, delay);
}

testTimer('test text', 2000);

