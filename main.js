// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const areaOfRectangle = (a, b) => a * b;
console.log(areaOfRectangle(20, 60));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const areaOfCircle = (r) => Math.PI * Math.pow(r, 2);
console.log(areaOfCircle(20));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const areaOfCilinder = (r, h) => Math.PI * Math.pow(r, 2) * h;
console.log(areaOfCilinder(20, 56));

// - створити функцію яка приймає масив та виводить кожен його елемент

let array = [1, 2, 3, 5, 7, 9, 56, 8, 67];

const printArr = (array) => {
    for (const number of array) {
        console.log(number);
    }
}
printArr(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const parag = (string) => {
    document.write(`<p>${string}</p>`)
}
parag('Lorem ipsum dolor sit amet');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const parag1 = (string1) => {
    document.write(`
    <ul>
        <li>${string1}</li>
        <li>${string1}</li>
        <li>${string1}</li>
    </ul>
    `)
}
parag1('Lorem ipsum dolor sit amet');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const parag2 = (string2,li) => {
    document.write(`<ul>`)
    for (let i = 0; i < li; i++) {
        document.write(`<li>${string2}</li>`)
    }
    document.write(`</ul>`)
}
parag2('Lorem ipsum dolor sit amet', 50);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

massiveWWW = [24, 5422, true, false, 5461, 2.22,76, 824, false, false, "Vasya", "Oleh", "asdff", "671234weds", "12341823hwue", "823hwue",true, true, false, false];
const parag3 = (array) => {
    document.write(`<ul>`)
    for (const element of array) {
        document.write(`<li>${element}</li>`)
    }
    document.write(`</ul>`)
}
parag3(massiveWWW);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {
        id: 1,
        name: 'Viktor',
        age: 20
    },
    {
        id: 2,
        name: 'Vanja',
        age: 25
    },
    {
        id: 3,
        name: 'Olga',
        age: 28
    },
    {
        id: 4,
        name: 'Nina',
        age: 34
    }
    ];

const usersDoc = (array) => {
    for (const user of array) {
        document.write(`<div>НОМЕР: ${user.id} - IM'Я: ${user.name} - ВІК:${user.age}</div>`)
    }
}
usersDoc(users);

// - створити функцію яка повертає найменьше число з масиву

let arrayX = [100,250,50,168,120,345,188];

const minimum = (array3) => {
    let num = array3[0];
    for (const element of array3) {
        if (element < num) {
            num = element;
        }
    }
    return num;
}
document.write(minimum(arrayX));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arrayF = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];

const sum = (array) => {
    let num1 = 0;
    for (const element of array) {
            num1 += element;
        }
    return num1;
}
console.log(sum(arrayF));