// Завдання 1: Відстеження кількості позитивних, негативних та нульових чисел

// Ваше завдання - написати програму для обчислення кількості позитивних, негативних та нульових чисел у заданому масиві чисел.

// Створіть масив чисел за допомогою конструкції const numbers = [2, -5, 0, 7, -3, 0, 10, -8].
// Задайте змінні positiveCount, negativeCount та zeroCount зі значенням 0. Вони будуть використовуватись для 
// відстеження кількості позитивних, негативних та нульових чисел в масиві.
// Використовуючи цикл for, пройдіться по кожному елементу масиву numbers.
// Перевірте чи число позитивне, негативне чи нульове, та збільште відповідну змінну (positiveCount, negativeCount або zeroCount) на 1.
// Після завершення циклу виведіть значення змінних positiveCount, negativeCount та zeroCount на консоль.

const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (const number of numbers) {
    if (number > 0) {
        positiveCount = positiveCount + 1;
    } else if (number < 0) {
        negativeCount = negativeCount +1;
    } else if (number === 0) {
        zeroCount = zeroCount + 1;
    }
}

console.log(positiveCount);
console.log(negativeCount);
console.log(zeroCount);