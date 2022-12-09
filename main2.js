let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

let address = []
for (const user of users) {
    address.push(user.address)
}
console.log(address);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

let task = document.createElement("h2");
task.innerText = '===========';
document.body.appendChild(task);
for (const user of users) {
    let wrap = document.createElement('div');
    for (const userKey in user) {
        if (typeof user[userKey] === "object") {
            for (const userElementKey in user[userKey]) {
                wrap.innerText += user[userKey][userElementKey] + ' ';
            }
        } else {
            wrap.innerText += user[userKey] + ' ';
        }
    }
    document.body.appendChild(wrap);
}
let task1 = task.cloneNode(true);
document.body.appendChild(task1);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

for (const user of users) {
    let wrapUser = document.createElement('div');
    for (const userKey in user) {
        let wrapUserElement = document.createElement("div");
        if (typeof user[userKey] === "object") {
            for (const userElementKey in user[userKey]) {
                wrapUserElement.innerText += user[userKey][userElementKey] + ' ';
            }
        } else {
            wrapUserElement.innerText += user[userKey];
        }
        wrapUser.appendChild(wrapUserElement);
    }
    document.body.appendChild(wrapUser);
}
let task2 = task.cloneNode(true);
document.body.appendChild(task2);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

function fn(object, wrap) {
    for (const objectKey in object) {
        let objectKeyElement = document.createElement("div");
        if (typeof object[objectKey] === "object") {
            fn(object[objectKey], objectKeyElement);
        } else {
            objectKeyElement.innerText += object[objectKey];
        }
        wrap.appendChild(objectKeyElement);
    }
}

for (const user of users) {
    let wrapUser = document.createElement('div');
    document.body.appendChild(wrapUser);
    fn(user, wrapUser);

}