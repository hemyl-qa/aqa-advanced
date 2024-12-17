// Домашнє завдання:(замість дефолтного) - Додати контролери до API тестів

// Створити нову гілку
// Використовувати тести з минулої домашки(API запити до JSONPlaceholder) АБО Створити 5-10 нових тестів до сервісу https://bookstore.toolsqa.com/swagger/#/ 
// У тестах робити перевірки через expect
// Використовувати контролери у тестах




const axios = require('axios');

class BaseController {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'https://bookstore.toolsqa.com',
            validateStatus: function (status) {
                return true;
            }
        })
    }
}

module.exports = BaseController;