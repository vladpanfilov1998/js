let divElement = document.createElement('div');
let removeAll = document.createElement('button');
removeAll.classList.add('remove');
removeAll.innerText = 'ВИДАЛИТИ ВСІ ТОВАРИ';
removeAll.onclick = () => {
    localStorage.removeItem('product');
    show()
}
const show = () => {
    divElement.innerHTML = '';
    let basket = JSON.parse(localStorage.getItem('product'));
    for (const basketElement of basket) {
        let basketDiv = document.createElement('div');
        basketDiv.classList.add('basket')
        basketDiv.innerHTML = `
    <h1>${basketElement.name}</h1>
    <h2>${basketElement.count} :pieces</h2>
    <h2>price: ${basketElement.price} $</h2>
    <div><img class = "img" src="${basketElement.img}" alt=""></div>
    `
        let htmlButtonElement = document.createElement('button');
        htmlButtonElement.classList.add('basket_button');
        htmlButtonElement.innerText = 'ВИДАЛИТИ ТОВАР';
        htmlButtonElement.addEventListener('click', function () {
            const index = basket.findIndex(value => value.id === basketElement.id);
            basket.splice(index, 1);
            localStorage.setItem('product', JSON.stringify(basket));
            show();
        })

        basketDiv.append(htmlButtonElement);
        divElement.appendChild(basketDiv);
    }
}
show();
divElement.appendChild(removeAll)
divElement.classList.add('basket_main')
document.body.appendChild(divElement);