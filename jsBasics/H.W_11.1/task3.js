// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити


async function fetchTodo() {
    const responseTodo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const dataTodo = await responseTodo.json();
    return dataTodo;
    
}

async function fetchUsers() {
    const responseUsers = await  fetch('https://jsonplaceholder.typicode.com/users/1')
    const dataUsers = await responseUsers.json();
    return dataUsers;
}


const promises = [fetchTodo(), fetchUsers()];

async function printDataTodo() {
    const postDataTodo = await fetchTodo();
    console.log(postDataTodo);
}

async function printDataUsers() {
    const postDataUsers = await fetchUsers();
    console.log(postDataUsers);
}

printDataTodo();
printDataUsers();