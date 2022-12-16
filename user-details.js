const url = new URL(location.href);
const id = url.searchParams.get('data');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json()
        .then(users => {
                let wrapper = document.createElement('div');
                wrapper.classList.add('wrapper_details');

                for (const user in users) {

                    let divUser = document.createElement('div');
                    divUser.classList.add('divUser');
                    wrapper.appendChild(divUser);

                    if (typeof users[user] !== 'object') {
                        divUser.innerText = `${user}:  ${users[user]}`;
                    } else {
                        divUser.innerText = `${user}:  `;

                        for (const key in users[user]) {
                            const divUserDetails = document.createElement('div');
                            divUserDetails.classList.add('divUserDetails');
                            divUser.appendChild(divUserDetails);
                            if (typeof users[user][key] !== 'object') {
                                divUserDetails.innerText = `
                                ${key}:  ${users[user][key]}`
                            }
                        }
                    }
                }
                document.body.appendChild(wrapper);
            }
        ));
