// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        let divCardFooter = document.createElement('div');
        divCardFooter.classList.add('divCardFooter');

        for (const post of posts) {
            if (post.id === +localStorage.getItem('post-click')) {
                let divCard = document.createElement('div');
                divCard.classList.add('cardPost');
                divCard.innerHTML = `
                        <h3>USER ID: ${post.userId}</h3>
                        <h3>ID: ${post.id}</h3>
                        <h4>Title: ${post.title}</h4>
                        <h5>Body: ${post.body}</h5>
                        `;
                let buttonP = document.createElement('button');
                buttonP.innerText = 'ВИВЕСТИ КОМЕНТАРІ';
                buttonP.onclick = () => {
                    buttonP.hidden = true;
                    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                        .then(response => response.json())
                        .then(comments => {
                            for (const comment of comments) {

                                if (post.id === comment.postId) {
                                    let divCardComments = document.createElement('div');
                                    divCardComments.classList.add('cardComments');
                                    divCardComments.innerHTML = `
                                        <h3>Post ID: ${comment.postId}</h3>
                                        <h3>ID: ${comment.id}</h3>
                                        <h4>Name: ${comment.name}</h4>
                                        <h5>E-mail: ${comment.email}</h5>
                                        <h6>Body: ${comment.body}</h6>
                                        `;
                                    divCardFooter.appendChild(divCardComments)
                                }

                                buttonP.disabled = true;
                            }
                        })
                }

                divCard.append(buttonP, divCardFooter);
                wrapper.appendChild(divCard);
                document.body.appendChild(wrapper);
            }
        }
    });