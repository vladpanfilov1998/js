// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну
// інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()
    .then(users => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        for (const user of users) {
            let divCard = document.createElement('div');
            divCard.classList.add('card');
            divCard.innerHTML = `
                        <h3>ID: ${user.id}</h3>
                        <h4>Name: ${user.name}</h4>
                        `;
            let button = document.createElement('button');
            button.innerText = 'ПОКАЗАТИ ПОДРОБИЦІ';
            button.onclick = () => {
                localStorage.setItem('user-click', user.id);
                window.location.href = 'user-details.html';
            };
            divCard.appendChild(button);
            wrapper.appendChild(divCard);
            document.body.appendChild(wrapper);
        }
    }));