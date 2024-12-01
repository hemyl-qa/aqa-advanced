// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
// Присвойте значення отримані від цих виразів до змінних

function fetchTodo() {
        return  fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(todoJson => todoJson.json())
        .catch(error => {
        console.log('Something wrong ', error);
        throw errors;
});
}

function fetchUsers() {
    return  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(userJson => userJson.json())
    .catch(errors => {
        console.log('Something wrong ', errors);
        throw errors;
});
}


const promises = [fetchTodo(), fetchUsers()];

const promiseAll = Promise.all(promises)
    .then(([todo, user]) => {
        console.log('Todo: ', todo);
        console.log('User: ', user);
    })
    .catch((error) => {
        console.log('Error Promise.all: ', error);
    });

const promiseRace = Promise.race(promises)
    .then((result) => {
        console.log('Result: ', result);
    
    })
    .catch((error) => {
        console.log('Error Promise.race: ', error);
    });    