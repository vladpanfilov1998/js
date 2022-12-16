// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()
        .then(users => {
            let wrapper = document.createElement('div');
            wrapper.classList.add('wrapper');
            for (const user of users) {
                let divCard = document.createElement('div');
                divCard.classList.add('card');
                divCard.innerText = `
                        ID: ${user.id}
                        Name: ${user.name}
                        `;
                let key = document.createElement('a');
                key.innerText = 'ДЕТАЛІ';
                key.href = `user-details.html?data=${user.id}`;

                divCard.append(key);
                wrapper.appendChild(divCard);
                document.body.appendChild(wrapper);
            }
        }));