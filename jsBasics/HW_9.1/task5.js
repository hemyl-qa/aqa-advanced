// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі


const users = [
    {name: 'John', email: 'John123@gmail.com', age: 47}, 
    {name: 'Cirilla', email: 'Ciri@gmail.com', age: 22}, 
    {name: 'Geralt', email: 'wolf@gmail.com',age: 50}];
for (const user of users) {
    const {name, email, age} = user;
    console.log(name);
    console.log(email);
    console.log(age);
    console.log('---------------------------');
};