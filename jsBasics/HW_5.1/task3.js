// Завдання 3: Генерація таблиці множення

// Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while .

// Виберіть число для якого потрібно згенерувати таблицю множення.
// Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
// Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль

let number = 4;

for ( let i = 1; i<=10; i++) {
    let x;
    x = number * i;
    console.log(`${number} * ${i} = ${x}`)
}

let number1 =7;
let count = 1;
while (count <= 10) {
    let y;
    y = number1 * count;
    console.log(`${number1} * ${count} = ${y}`)
    count++;
}