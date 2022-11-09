// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let a = 0; a < 10; a++) {
    document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let b = 0; b < 10; b++) {
    document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit ${b}</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let c = 0;
while (c < 20) {
    document.write(`<h1> Lorem ipsum dolor sit amet, consectetur adipiscing elit </h1>`);
    c++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//

let d = 0;
while (d < 20) {
    document.write(`<h1> Lorem ipsum dolor sit amet, consectetur adipiscing elit ${d}</h1>`);
    d++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------

for (let item of listOfItems) {
    document.write(`
     <ul>
         <li>${item}</li>
       </ul>
    `)
}

//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

for (let product of products) {
    document.write(`
 <div class="product-card">
     <h3 class="product-title">${product.title} Price - ${product.price} </h3>
 <img src='${product.image}' alt='${product.title}' class="product-image">
 </div>
    `)
}

// --------------------
//  є масив
//
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true

let e = 0;
while (e < users.length) {
    let user = users[e];
    if (user.status) {
        document.write(`<div>${user.name} ${user.status}</div>`)
    }
    e++;
}

// - користувачів зі статусом false

let p = 0;
while (p < users.length) {
    let user = users[p];
    if (!user.status) {
        document.write(`<div>${user.name} ${user.status}</div>`)
    }
    p++;
}
// - користувачів які старші за 30 років

let r = 0;
while (r < users.length) {
    let user = users[r];
    if (user.age > 30) {
        document.write(`<div>${user.name} ${user.age}</div>`)
    }
    r++;
}