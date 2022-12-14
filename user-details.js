// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()
    .then(users => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper_details');
        for (const user of users) {
            if (user.id === +localStorage.getItem('user-click')) {

                let divUserHeader = document.createElement('div');
                let divUserMain = document.createElement('div');
                let divUserMainRight = document.createElement('div');
                let divUserMainCenter = document.createElement('div');
                let divUserMainLeft = document.createElement('div');
                let divUserFooter = document.createElement('div');
                let divUserFooterCard = document.createElement('div');

                divUserHeader.classList.add('divUserHeader');
                divUserMain.classList.add('divUserMain');
                divUserFooter.classList.add('divUserFooter');
                divUserFooterCard.classList.add('divUserFooterCard');

                divUserMainRight.classList.add('divUserMainRight');
                divUserMainCenter.classList.add('divUserMainCenter');
                divUserMainLeft.classList.add('divUserMainCenter');

                divUserHeader.innerHTML = `
                       <h3>ID: ${user.id}</h3>
                        <h4>Name: ${user.name}</h4>
                        `;

                divUserMainRight.innerHTML = `
                        <h5>Username: ${user.username}</h5>
                        <h5>E-mail: ${user.email}</h5>
                        <h5>ADDRESS:</h5>
                        <h5>street: ${user.address.street}</h5>
                        <h5>suite: ${user.address.suite}</h5>
                        <h5>city: ${user.address.city}</h5>
                        <h5>zip code: ${user.address.zipcode}</h5>
                         `;

                divUserMainCenter.innerHTML = `
                        <h5>GEO:</h5>
                        <h5>lat: ${user.address.geo.lat}</h5>
                        <h5>lng: ${user.address.geo.lng}</h5>
                        <h5>Phone: ${user.phone}</h5>
                        <h5>Website: ${user.website}</h5>
                        `;

                divUserMainLeft.innerHTML = `
                        <h5>COMPANY:</h5>
                        <h5>name: ${user.company.name}</h5>
                        <h5>catch phrase: ${user.company.catchPhrase}</h5>
                        <h5>bs: ${user.company.bs}</h5>
                        `;
                let button = document.createElement('button');
                button.innerText = 'ПОКАЗАТИ ПОСТИ КОРИСТУВАЧА';
                button.onclick = () => {
                    fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(response => response.json())
                        .then(posts => {
                            for (const post of posts) {
                                if (user.id === post.userId) {
                                    let divCard = document.createElement('div');
                                    divCard.classList.add('card');
                                    divCard.innerHTML = `
                        <h3>USER ID: ${post.userId}</h3>
                        <h3>ID: ${post.id}</h3>
                        <h4>Title: ${post.title}</h4>
                        <h5>Body: ${post.body}</h5>
                        `;
                                    let buttonR = document.createElement('button');
                                    buttonR.innerText = 'КОМЕНТАРІ ДО ПОСТА';
                                    buttonR.onclick = () => {

                                        localStorage.setItem('post-click', post.id);
                                        window.location.href = 'post-details.html';

                                    };

                                    divCard.appendChild(buttonR)
                                    divUserFooterCard.appendChild(divCard)

                                }
                                button.disabled = true;
                            }

                        })
                }

                divUserMain.append(divUserMainRight, divUserMainCenter, divUserMainLeft);
                divUserFooter.appendChild(button);
                wrapper.append(divUserHeader, divUserMain, divUserFooter, divUserFooterCard);
                document.body.appendChild(wrapper);
            }
        }
    }));
