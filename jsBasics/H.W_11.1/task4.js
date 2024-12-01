// Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.


class Todo {
    static async fetchTodo() {
        const responseTodo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const dataTodo = await responseTodo.json();
        return dataTodo;
        
    }
    static async printDataTodo() {
        const postDataTodo = await this.fetchTodo();
        console.log(postDataTodo);
    }
}

Todo.printDataTodo();


class Users {
    static async fetchUsers() {
        const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const dataUsers = await responseUsers.json();
        return dataUsers;
        
    }
    static async printDataUsers() {
        const postDataUsers = await this.fetchUsers();
        console.log(postDataUsers);
    }
}

Users.printDataUsers();