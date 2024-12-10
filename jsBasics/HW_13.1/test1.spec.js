// Створити тестовий сценарій за допомогою пекеджу axios.

// Використати безкоштовне і відкрите АПІ - JSONPlaceholder.

// Задача:

// створити 5 запитів за допомогою методів GET, POST
// обов'язково має бути перевірка респонсу - response status, data на коректність згідно з документацією по АПІ
// Додаткове завдання: (не обовʼязкове)

// Назва: Налаштування інтерсепторів

// Складність: середній

// додати логування за допомогою Axios interceptors запитів і респонсів
// До домашки має бути прикріплений ПР, і скриншот успішного виконання тестів на локальній машині.

const axios = require('axios');

test("Get all book list", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data[0].title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
})

test("Get comment", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data[2].email).toBe("Nikita@garfield.biz");
})

test("Adding a comment", async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
            {
            title: 'My test post',
            body: 'This is test post',
            userId: 102
            },
            {headers: {
                'Content-Type': 'application/json',
            }
        }
        )

    console.log(response.data);

    expect(response.status).toEqual(201);
    expect(response.data.body).toBe('This is test post');
    expect(response.data.title).toBe('My test post');
    expect(response.data.userId).toBe(102);
});

test("Get post", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data[4].name).toBe("vero eaque aliquid doloribus et culpa");
    expect(response.data[4].email).toBe("Hayden@althea.biz");
    expect(response.data[4].body).toBe("harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et");

})

test("Get todos", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos', { 
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data[7].userId).toBe(1);
    expect(response.data[7].id).toBe(8);
    expect(response.data[7].title).toBe("quo adipisci enim quam ut ab");
    expect(response.data[7].completed).toBe(true);
})


