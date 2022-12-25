let wrapper = document.createElement('div');
wrapper.classList.add('container');
let favorites = JSON.parse(localStorage.getItem('favorites'));
console.log(favorites);
for (const favorite of favorites) {
    let div = document.createElement('div');
    div.className = "card";
    div.innerText = `
    NAME = ${favorite.name};
    AGE = ${favorite.age};
    STATUS = ${favorite.status}
    `;
    wrapper.appendChild(div);
}
document.body.appendChild(wrapper);